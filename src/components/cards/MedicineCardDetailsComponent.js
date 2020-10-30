import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './CardsComponent.css';

import MedicineInfoComponent from './medicineInfoComponent';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl, Spinner } from 'react-bootstrap';

function MedicineCardDetailsComponent(props) {
  // console.log(props);
  // console.log(e);
  const [MedicineDetails, setMedicineDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(process.env.REACT_APP_BASE_URL);
    const id = props.match.params.id;
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/medicine/${id}`)
      .then((response) => {
        setMedicineDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            padding: '5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner animation="border" variant="primary" size="lg" />
        </div>
      ) : (
        <>
          <Card className="MyCard" id="cardDesign">
            <Card.Body className="MyCardBody">
              <div className="outer">
                <Card.Img
                  className="MyImg"
                  variant="top"
                  src={MedicineDetails.image_url}
                  id="image"
                />
              </div>

              <div className="outer">
                <div className="inner1">
                  <Card.Title style={{ textAlign: 'left', margin: '5%' }}>
                    {MedicineDetails.name}
                  </Card.Title>
                  <MedicineInfoComponent
                    style={{ margin: '5%' }}
                    tag=" pain relief"
                    saltName=" paracetamol"
                    medicineWeight={' ' + MedicineDetails.strength}
                    medicineQuantity=" 15 tablest(s) in a strip"
                    manufacturerName={' ' + MedicineDetails.manufacturer}
                    country=" INDIA"
                    amount={` ₹${MedicineDetails.price}`}
                  />
                </div>
              </div>

              <div className="inputTag">
                <InputGroup style={{ width: '50%', display: 'flex' }}>
                  <FormControl
                    placeholder="Quantity"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="number"
                  />
                </InputGroup>
                <a href="#" target="_blank" className="cartbtn">
                  <button className="MyButton">Add to Cart</button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}

export default withRouter(MedicineCardDetailsComponent);
