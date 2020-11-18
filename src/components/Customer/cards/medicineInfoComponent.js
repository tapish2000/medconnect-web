import React from 'react';
import './CardsComponent.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


function MedicineInfoComponent(props){
    return (
        <>
            <Card style={{ width: "100%" }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Saltname: {props.saltName}</ListGroup.Item>
                    <ListGroup.Item>Weight: {props.medicineWeight}</ListGroup.Item>
                    <ListGroup.Item>Name of Manufacturer: {props.manufacturerName}</ListGroup.Item>
                    <ListGroup.Item style={{color:"coral"}}>Prescription Required: {props.prescription}</ListGroup.Item>
                    <ListGroup.Item>M.R.P: {props.amount}</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}






export default MedicineInfoComponent;