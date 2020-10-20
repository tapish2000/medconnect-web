import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';

function MedicineCardComponent(props) {
    return (<>

        <Card className="MyCard" style={{ width: '18rem' }}>
            <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
            <Card.Body className="MyCardBody">
                <Card.Title>Medicine Name</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make</Card.Text>
                <a href="#" target="_blank"><button className="MyButton">Add to Cart</button></a>
            </Card.Body>
        </Card>
      
    </>);
}

export default MedicineCardComponent;
