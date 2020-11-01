import React, { useState, useEffect } from 'react';
import Locations from './locations'; //dataset of locations,not specifically for medicine shops
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import AccessToken from '../config/secret';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { geolocated } from 'react-geolocated';
import Spinner from 'react-bootstrap/Spinner';
import 'mapbox-gl/dist/mapbox-gl.css'

// import { Editor, DrawPolygonMode } from 'react-map-gl-draw';




import './mapBox.css';
import axios from 'axios';


// let selectedMedicineShop = null;


function MapBox(props){

    const [Shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://glacial-caverns-39108.herokuapp.com/shop/city")
        .then((response) => {
            console.log(response.data);
            setShops(response.data.shops);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
          });
      }, []);

    function getCurrentLatitude(props){
        
        if(props.isGeolocationAvailable && props.isGeolocationEnabled && props.coords!==null){
            return props.coords.latitude;
        }
        return 29.364138;
    }

    function getCurrentLongitude(props){
        
        if(props.isGeolocationAvailable && props.isGeolocationEnabled && props.coords!== null){
            return props.coords.longitude;
        }
        return 76.972546;
    }


   

    const [UserCoordinates,setUserCoordinates] = useState({
        latitude:getCurrentLatitude(props),
        longitude:getCurrentLongitude(props)
    })

    

    const [viewport,setViewPort] = useState({
        latitude:UserCoordinates.latitude,
        longitude:UserCoordinates.longitude,
        zoom:11,
        width:"70vw",
        height:"80vh"
    });


    const [selectedMedicineShop, setSelectedMedicineShop] = useState(null);
    const [currentRadius,setCurrentRadius] = useState(100);

   
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
        console.log(d);
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }


      function eventHandler(e){
          let value = e.target.textContent;
          if (value === "5km"){
              value = 5;
          }else if (value === "10km"){
              value = 10;
          }else if (value === "15km"){
              value = 15;
          }
          setCurrentRadius(value);

      }

    return(
        <>
            {loading ? (
                <div className="SpinnerDiv">
                    <Spinner
                        animation="border"
                        variant="primary"
                        style={{ margin: 'auto' }}
                    />
                </div>
            ) : (
                <>
                    <h1 className="MyHeading"> Nearby Medicine Shops </h1>
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
                                    <div>Latitude: {UserCoordinates.latitude} | Longitude: {UserCoordinates.longitude}</div>
                                </div>

                                {
                                    Shops.map((shop)=>(
                                        // console.log(distance);
                                        //shop means shopation with metadata
                                        (checkDistance(getDistanceFromLatLonInKm(shop.location[0], shop.location[1], 29.364138, 76.972546),currentRadius))?(
                                            <Marker key = {shop._id} latitude={shop.location[0]} longitude = {shop.location[1]} >
                                                <div>
                                                    <img src = "https://www.pinclipart.com/picdir/middle/447-4478350_png-file-svg-fa-map-marker-png-clipart.png" style={{width:"1vw"}} onMouseOver = {(event)=>{
                                                        event.preventDefault();
                                                        setSelectedMedicineShop(shop);
                                                    }} >
                                                        {/* <div>
                                                            <img src = "https://www.pinclipart.com/picdir/middle/447-4478350_png-file-svg-fa-map-marker-png-clipart.png" alt = "error" className = "imageDesign"/>
                                                        </div> */}
                                                    </img>
                                                </div>  
                                            </Marker>
                                        ):null
                                    ))
                                    
                                }

                                {
                                    (UserCoordinates) ? (
                                        // {{console.log(selectedMedicineShop)}}
                                        <Marker key = {1} latitude={29.364138} longitude = {76.972546}>
                                            <div>
                                                <img src="https://toppng.com/uploads/preview/eat-play-do-icon-map-marker-115548254600u9yjx6qhj.png" style={{width:"1vw"}} onMouseOver = {(event)=>{
                                                    event.preventDefault();
                                                    
                                                }} >
                                                    {/* <div>
                                                        <img src = "https://image.shutterstock.com/image-vector/user-icon-human-person-symbol-260nw-1051033475.jpg" alt = "error" className = "imageDesign"/>
                                                    </div> */}
                                                </img>
                                            </div>  
                                        </Marker>
                                    ) : null
                                }

                                {
                                    (selectedMedicineShop) ? (
                                        // {{console.log(selectedMedicineShop)}}
                                        <Popup
                                            latitude={selectedMedicineShop.location[0]} 
                                            longitude = {selectedMedicineShop.location[1]}
                                            onClose = {()=>{
                                                setSelectedMedicineShop(null);
                                            }}
                                        >
                                            <div>
                                                <h3>{selectedMedicineShop.name}</h3>
                                                <h5>{selectedMedicineShop.address}</h5>
                                            </div>
                                        </Popup>
                                    ) : null
                                }


                            </ReactMapGL>
                        </div>
                            
                        <div className = "radiusCircle">
                            <DropdownButton id="dropdown-item-button" title="Radius circle" className="dropDown" variant="info">
                                <Dropdown.Item as="button" onClick={eventHandler}>5km</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={eventHandler}>10km</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={eventHandler}>15km</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </>
            )}
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