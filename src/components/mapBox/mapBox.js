import React,{useState} from 'react';
import Locations from './locations'; //dataset of locations,not specifically for medicine shops
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import AccessToken from '../config/secret';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './mapBox.css';


// let selectedMedicineShop = null;


function MapBox(props){
    

    const [viewport,setViewPort] = useState({
        latitude:45.34125624499935,
        longitude:-75.931122879767898,
        zoom:10,
        width:"80vw",
        height:"90vh"
    });


    const [selectedMedicineShop, setSelectedMedicineShop] = useState(null);
    
    

    

    return(
        <>
            <div className = "whole">
                <div className = "mapBoxDesign">
                    <ReactMapGL 
                        {...viewport} 
                        mapboxApiAccessToken = {AccessToken.REACT_APP_MAPBOX_ACCESS_TOKEN} 
                        onViewportChange = {(viewport)=>{setViewPort(viewport);}}
                        mapStyle={AccessToken.REACT_APP_MAP_STYLE}
                    >

                        {
                            Locations.features.map((loc)=>(
                                //loc means location with metadata
                                <Marker key = {loc.properties.ID} latitude={loc.geometry.coordinates[1]} longitude = {loc.geometry.coordinates[0]}>
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
                            ))
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
                                <Dropdown.Item as="button">5km</Dropdown.Item>
                                <Dropdown.Item as="button">10km</Dropdown.Item>
                                <Dropdown.Item as="button">15km</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    
                
            </div>
        </>
    )
}










export default MapBox;