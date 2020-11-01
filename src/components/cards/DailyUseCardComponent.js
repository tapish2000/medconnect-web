import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';




function DailyUseCardComponent(props) {
  return (
    <>
      <Card.Link as={Link} to={`/${props.id}`}>
        <Card className="MyCard" style={{ width: '100%', height: '100%' }}>
          <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
          <Card.Body className="MyCardBody">
            <Card.Title>{props.title} </Card.Title>
            <Card.Text>{props.strength} </Card.Text>
            <Card.Text>{props.manufacturer}</Card.Text>
            <Card.Text>₹ {props.price}</Card.Text>
            <a href="#">
              <button className="MyButton">Details</button>
            </a>
          </Card.Body>
        </Card>
      </Card.Link>
    </>
  );
}

export default withRouter(DailyUseCardComponent);
