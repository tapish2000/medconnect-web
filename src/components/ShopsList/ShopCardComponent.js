import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';

class ShopCardComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Card className="MyCard" style={{ width: '100%' }}>
                <Card.Img className="MyImg" variant="top" src={this.props.imgsrc} />
                <Card.Body className="MyCardBody">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ShopCardComponent;
