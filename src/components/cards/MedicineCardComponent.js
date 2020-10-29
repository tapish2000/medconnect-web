import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';

function MedicineCardComponent(props) {
  var url = '/medicinedetails/';

  return (
    <>
      <Card.Link href={url}>
        <Card className="MyCard" style={{ width: '100%', height: '100%' }}>
          <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
          <Card.Body className="MyCardBody">
            <Card.Title>{props.title} </Card.Title>
            <Card.Text>{props.strength} </Card.Text>
            <Card.Text>{props.manufacturer}</Card.Text>
            <Card.Text>₹ {props.price}</Card.Text>
            <a href="#" target="_blank">
              <button className="MyButton">Add to Cart</button>
            </a>
          </Card.Body>
        </Card>
      </Card.Link>
    </>
  );
}

export default MedicineCardComponent;
