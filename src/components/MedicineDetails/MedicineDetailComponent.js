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
                                <Card.Title style = {{textAlign:"left",margin:"5%"}}>Medicine Name</Card.Title>
                                <MedicineInfoComponent style = {{margin:"5%"}} tag = "pain relief" saltName = "paracetamol" medicineWeight = "500gm" medicineQuantity ="15 tablest(s) in a strip" manufacturerName = "Consumer HealthCare Ltd" country="INDIA" amount = "Rs 16.23" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <InputGroup style = {{width:"50%",display:"flex"}}>
                                    <FormControl
                                        placeholder="Quantity"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        type = "number"
                                    />
                                </InputGroup>
                                <a href="#" target="_blank" className = "cartbtn"><button className="MyButton">Add to Cart</button></a>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default MedicineDetails;