import React, { useState, useEffect } from 'react';
import './AyurvedaGenericComponent.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MedicineCardComponent from '../cards/MedicineCardComponent';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';
// import AyurvedaGenericMedicines from './AyurvedaGenericMedicines';

const AyurvedaGenericComponent = () => {

  const [AyurvedicGenMedicines, setAyurvedicGenMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://glacial-caverns-39108.herokuapp.com/medicine/ayurvedic/generic')
      .then((response) => {
        console.log(response.data.data);
        setAyurvedicGenMedicines(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <Container fluid>
        <h1 className="MyHeading"> Ayurveda Generic Medicines </h1>
        {loading ? (
          <div className="SpinnerDiv">
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: 'auto' }}
            />
          </div>
        ) : (
          <Row className="m-3">
            {AyurvedicGenMedicines.map((val) => {
              return (
                <Col md={3} className="mt-3 mb-3">
                  <MedicineCardComponent
                    Key={val._id}
                    imgsrc={val.image_url}
                    title={val.name}
                    manufacturer={val.manufacturer}
                    strength={val.strength}
                    price={val.price}
                    id={val._id}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
}

export default AyurvedaGenericComponent;