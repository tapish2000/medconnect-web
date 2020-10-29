import React, { useState, Component } from 'react';
import Card from 'react-bootstrap/Card';
import './MedicineDetailsComponent.css';
import MedicineInfoComponent from '../cards/medicineInfoComponent';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class MedicineDetails extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Card className="DetailsCard" id = "cardDesign">
                <Card.Body className="DetailsCardBody">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <Card.Img className="medicineImage" variant="top" src={this.props.imgsrc} id = "image"/>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <Card.Title id="card-head">Medicine Name</Card.Title>
                                </div>
                                <div className="row">
                                    <Card.Subtitle id="card-head">Shop Name</Card.Subtitle>
                                    <MedicineInfoComponent style = {{margin:"5%"}} saltName = "paracetamol" medicineWeight = "500gm" manufacturerName = "Consumer HealthCare Ltd" prescription="Yes" amount = "Rs 16.23" />
                                </div>
                                <div className="row">
                                    <select className="form-control" id="quantity">
                                        <option>Quantity: 1</option>
                                        <option>Quantity: 2</option>
                                        <option>Quantity: 3</option>
                                        <option>Quantity: 5</option>
                                        <option>Quantity: 10</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <Card style={{width: '100%'}}>
                                    <Card.Body>
                                        <Card.Title>Disclaimer</Card.Title>
                                        <Card.Text className="text-muted">
                                            The contents of this website are for informational purposes only and not intended to be a substitute
                                            for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other 
                                            qualified health provider with any questions you may have regarding a medical condition. Do not disregard 
                                            professional medical advice or delay in seeking it because of something you have read on this website.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm text-right my-auto">
                                <a href="#" role="button" className = "btn btn-outline-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default MedicineDetails;