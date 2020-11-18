import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Card,Button} from 'react-bootstrap';
import './CardsComponent.css';

class ShopCardComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Card.Link as={Link} to={`/medicine/${this.props.Key}`}>
                <Card className="MyCard" style={{ width: '100%' }}>
                    <Card.Img className="MyImg" variant="top" src={this.props.imgsrc} />
                    <Card.Body className="MyCardBody">
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.text}</Card.Text>
                        <a href="#" target="_blank">
                            <button className="MyButton">Details</button>
                        </a>
                    </Card.Body>
                </Card>
            </Card.Link>
        );
    }
}

export default withRouter(ShopCardComponent);
