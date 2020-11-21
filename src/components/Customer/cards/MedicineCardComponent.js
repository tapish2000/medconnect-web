import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Card, Badge } from 'react-bootstrap';
import './CardsComponent.css';

function MedicineCardComponent(props) {
  console.log(props.location.pathname);
  return (
    <>
      <Card.Link as={Link} to={`/medicine/${props.id}`}>
        <Card className="MyCard" style={{ width: '100%', height: '100%' }}>
          <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
          <Card.Body className="MyCardBody">
            <Card.Title>{props.title}{' '} 
            </Card.Title>
            {(props.prsc)?(<Badge variant="info">* Prescription required</Badge>):''}
            <Card.Text>{props.strength} </Card.Text>
            <Card.Text>{props.manufacturer}</Card.Text>
            <Card.Text>₹ {props.price}</Card.Text>
            <a href="#" target="_blank">
              <button className="MyButton">Details</button>
            </a>
          </Card.Body>
        </Card>
      </Card.Link>
    </>
  );
}

export default withRouter(MedicineCardComponent);
