import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';

function ShopCardComponent(props) {
    return (
        <Card className="MyCard" style={{ width: '18rem' }}>
            <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
            <Card.Body className="MyCardBody">
                <Card.Title>Shop Name</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make</Card.Text>
                <Card.Text>Address</Card.Text>
                <a href="#" target="_blank"><button className="MyButton">View on Map</button></a>
            </Card.Body>
        </Card>
    );
}

export default ShopCardComponent;
