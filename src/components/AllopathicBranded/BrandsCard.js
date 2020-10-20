import React from 'react';
import Card from 'react-bootstrap/Card';

function BrandsCard(props) {
    return (<>

        <Card className="MyCard" style={{ width: '18rem' }}>
            <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
            <Card.Body className="MyCardBody">
                <Card.Title>Brand Name</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make</Card.Text>
            </Card.Body>
        </Card>
      
    </>);
}

export default BrandsCard;
