import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';

import MedicineInfoComponent from './medicineInfoComponent';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MedicineCardComponent(props) {
    return (<>

        <Card className="MyCard" style={{ width: '100%' }}>
            
            <Card.Body className="MyCardBody">
                <div className = "outer">
                    <Card.Img className="MyImg" variant="top" src={props.imgsrc} />
                </div>
                
                <div className="outer">
                    <div className="inner">
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
                </div>
                

                
            </Card.Body>
        </Card>
      
    </>);
}

export default MedicineCardComponent;
