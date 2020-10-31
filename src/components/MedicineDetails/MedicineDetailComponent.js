import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './MedicineDetailsComponent.css';
import MedicineInfoComponent from '../cards/medicineInfoComponent';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function MedicineDetails(props) {
  // console.log(props);
  // console.log(e);
  const [MedicineData, setMedicineData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(process.env.REACT_APP_BASE_URL);
    const id = props.match.params.id;
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/medicine/${id}`)
      .then((response) => {
        console.log(response.data);
        setMedicineData(response.data);
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
          <Card className="DetailsCard" id="cardDesign">
            <Card.Body className="DetailsCardBody">
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <Card.Img
                      className="medicineImage"
                      variant="top"
                      src={MedicineData.image_url}
                      id="image"
                    />
                  </div>
                  <div className="col-sm">
                    <div className="row">
                      <Card.Title id="card-head">
                        {MedicineData.name}
                      </Card.Title>
                      {/* <Card.Subtitle id="card-head">Shop Name</Card.Subtitle> */}
                      <MedicineInfoComponent
                        style={{ margin: '5%' }}
                        saltName="paracetamol"
                        medicineWeight={MedicineData.strength}
                        manufacturerName={MedicineData.manufacturer}
                        prescription={MedicineData.prescription ? 'Yes' : 'No'}
                        amount={'₹' + MedicineData.price}
                      />
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
                    <Card>
                      <Card.Body>
                        <Card.Title>Disclaimer</Card.Title>
                        <Card.Text className="text-muted">
                          The contents of this website are for informational
                          purposes only and not intended to be a substitute for
                          professional medical advice, diagnosis, or treatment.
                          Please seek the advice of a physician or other
                          qualified health provider with any questions you may
                          have regarding a medical condition. Do not disregard
                          professional medical advice or delay in seeking it
                          because of something you have read on this website.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  {props.showBtn ? 
                    <div className="col-sm text-right my-auto">
                        <a
                        href="#"
                        role="button"
                        className="btn btn-outline-primary"
                        >
                        Add to Cart
                        </a>
                    </div> : null
                    }
                </div>
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}

export default withRouter(MedicineDetails);
