import React from 'react';
import './CardsComponent.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import MedicineTagComponent from './medicineTagComponent'; 


function MedicineInfoComponent(props){
    return (
        <>
            <Card style={{ width: "100%" }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><MedicineTagComponent tag = {props.tag}/></ListGroup.Item>
                    <ListGroup.Item>Saltname:{props.saltName}</ListGroup.Item>
                    <ListGroup.Item>Weight:{props.medicineWeight}</ListGroup.Item>
                    <ListGroup.Item>Quantity:{props.medicineQuantity}</ListGroup.Item>
                    <ListGroup.Item>Name of Manufacturer:{props.manufacturerName}</ListGroup.Item>
                    <ListGroup.Item>Country Of Origin:{props.country}</ListGroup.Item>
                    <ListGroup.Item>M.R.P:{props.amount}</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}






export default MedicineInfoComponent;