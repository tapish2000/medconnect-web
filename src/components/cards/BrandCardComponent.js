import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';

function BrandCardComponent(props) {

    var url = "/medicinedetails/";

    return (<>
        
        <Card.Link href={url}>
            <Card className="MyCard" style={{ width: '100%' }}>
                <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
                <Card.Body className="MyCardBody">
                    <Card.Title>Brand Name</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make</Card.Text>
                </Card.Body>
            </Card>
        </Card.Link>
      
    </>);
}

export default BrandCardComponent;
