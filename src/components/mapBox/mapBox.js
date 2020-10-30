import React,{useState} from 'react';
import Locations from './locations'; //dataset of locations,not specifically for medicine shops
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import AccessToken from '../config/secret';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { geolocated } from 'react-geolocated';

// import { Editor, DrawPolygonMode } from 'react-map-gl-draw';




import './mapBox.css';


// let selectedMedicineShop = null;


function MapBox(props){
    

    function getCurrentLatitude(props){
        
        if(props.isGeolocationAvailable && props.isGeolocationEnabled && props.coords!==null){
            return props.coords.latitude;
        }
        return 45.383321536272049;
    }

    function getCurrentLongitude(props){
        
        if(props.isGeolocationAvailable && props.isGeolocationEnabled && props.coords!== null){
            return props.coords.longitude;
        }
        return -75.3472987731628;
    }


   

    const [UserCoordinates,setUserCoordinates] = useState({
        latitude:getCurrentLatitude(props),
        longitude:getCurrentLongitude(props)
    })

    

    const [viewport,setViewPort] = useState({
        latitude:UserCoordinates.latitude,
        longitude:UserCoordinates.longitude,
        zoom:10,
        width:"80vw",
        height:"90vh"
    });


    const [selectedMedicineShop, setSelectedMedicineShop] = useState(null);
    const [currentRadius,setCurrentRadius] = useState(5515);

   
    function getLoc(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getPos);
        }
    }

    function getPos(position){
        console.log(position)
        setUserCoordinates({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        });
    }


    function checkDistance(distance,parameter){
        // console.log(distance);
        if(distance<=parameter){
            return true;
        }
        return false;
    }


    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }


      function eventHandler(e){
          let value = e.target.textContent;
          if(value === "5km"){
              value = 5510;
          }else if(value === "10km"){
              value = 5520;
          }else{
              value = 5550;
          }
          setCurrentRadius(value);

      }
    

    return(
        <>
            <div className = "whole">
                <div className = "mapBoxDesign">
                    <ReactMapGL 
                        {...viewport} 
                        mapboxApiAccessToken = {AccessToken.REACT_APP_MAPBOX_ACCESS_TOKEN} 
                        onViewportChange = {(viewport)=>{
                            getLoc();
                            setViewPort(viewport);
                            
                        }}
                        mapStyle={AccessToken.REACT_APP_MAP_STYLE}
                        clickRadius = {1000000}
                    >
                        <div className='sidebarStyle'>
                            <div>Longitude: {UserCoordinates.latitude} | Latitude: {UserCoordinates.longitude}</div>
                        </div>
                        

                        {
                            
                            
                            Locations.features.map((loc)=>(
                                // console.log(distance);
                                //loc means location with metadata
                                (checkDistance(getDistanceFromLatLonInKm(loc.geometry.coordinates[1],loc.geometry.coordinates[0],UserCoordinates.longitude,UserCoordinates.latitude),currentRadius))?(
                                    <Marker key = {loc.properties.ID} latitude={loc.geometry.coordinates[1]} longitude = {loc.geometry.coordinates[0]} >
                                        <div>
                                            <button className = "marker-btn" onMouseOver = {(event)=>{
                                                event.preventDefault();
                                                setSelectedMedicineShop(loc);
                                            }} >
                                                <div>
                                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWZeyq8wD_Q2OH8dxezpIpyX0iNvK1oodtRQ&usqp=CAU" alt = "error" className = "imageDesign"/>
                                                </div>
                                            </button>
                                        </div>  
                                    </Marker>
                                ):null
                            ))

                            
                            
                            
                        }


                        {
                            (UserCoordinates) ? (
                                // {{console.log(selectedMedicineShop)}}
                                <Marker key = {1} latitude={45.383321536272049} longitude = {-75.3472987731628}>
                                    <div>
                                        <button className = "marker-btn" onMouseOver = {(event)=>{
                                            event.preventDefault();
                                            
                                        }} >
                                            <div>
                                                <img src = "https://image.shutterstock.com/image-vector/user-icon-human-person-symbol-260nw-1051033475.jpg" alt = "error" className = "imageDesign"/>
                                            </div>
                                        </button>
                                    </div>  
                                </Marker>
                            ) : null
                        }

                        {
                            (selectedMedicineShop) ? (
                                // {{console.log(selectedMedicineShop)}}
                                <Popup
                                    latitude={selectedMedicineShop.geometry.coordinates[1]} 
                                    longitude = {selectedMedicineShop.geometry.coordinates[0]}
                                    onClose = {()=>{
                                        setSelectedMedicineShop(null);
                                    }}
                                >
                                    <div>
                                        <h3>{selectedMedicineShop.properties.NAME}</h3>
                                        <h5>{selectedMedicineShop.properties.ADDRESS}</h5>
                                    </div>
                                </Popup>
                            ) : null
                        }


                    </ReactMapGL>
                </div>
                    
                        <div className = "radiusCircle">
                            <DropdownButton id="dropdown-item-button" title="Radius circle" className="dropDown">
                                <Dropdown.Item as="button" onClick={eventHandler}>5km</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={eventHandler}>10km</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={eventHandler}>15km</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    
                
            </div>
        </>
    )
}

export default geolocated({

    positionOptions: {
        enableHighAccuracy: false
    },
    watchPosition:true,
    userDecisionTimeout: 5000
})(MapBox);