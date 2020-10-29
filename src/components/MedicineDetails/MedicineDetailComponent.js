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
                    {/* <div className = "outer">
                        <Card.Img className="medicineImage" variant="top" src={this.props.imgsrc} id = "image"/>
                    </div>
                    
                    <div className="outer">
                        <div className="inner1">
                            <Card.Title style = {{textAlign:"left",margin:"5%"}}>Medicine Name</Card.Title>
                            <MedicineInfoComponent style = {{margin:"5%"}} tag = "pain relief" saltName = "paracetamol" medicineWeight = "500gm" medicineQuantity ="15 tablest(s) in a strip" manufacturerName = "Consumer HealthCare Ltd" country="INDIA" amount = "Rs 16.23" />
                        </div>
                    </div>

                    <div className="inputTag">
                        <InputGroup style = {{width:"50%",display:"flex"}}>
                            <FormControl
                            placeholder="Quantity"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            type = "number"
                            />
                        </InputGroup>
                        <a href="#" target="_blank" className = "cartbtn"><button className="MyButton">Add to Cart</button></a>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <Card.Img className="medicineImage" variant="top" src={this.props.imgsrc} id = "image"/>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <Card.Title id="card-head">Medicine Name</Card.Title>
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
                            <div className="col-sm">
                                <Card>
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
                            <div className="col-sm text-right">
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