import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllopathicBrandedComponent.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MedicineCardComponent from '../cards/MedicineCardComponent';
import BrandCardComponent from '../cards/BrandCardComponent';
import AllopathicBrands from './AllopathicBrands';

import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';

const AllopathicBrandedComponent = () => {
  const [AllopathicMedicines, setAllopathicMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://glacial-caverns-39108.herokuapp.com/medicine/allopathic/branded')
      .then((response) => {
        console.log(response);
        setAllopathicMedicines(response.data);
        // console.log(AllopathicMedicines);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container fluid>
        <h1 className="MyHeading"> Allopathic Top Brands </h1>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Row className="m-3">
              {AllopathicBrands[0].map((val) => {
                return (
                  <Col md={3} className="mt-3 mb-3">
                    <BrandCardComponent
                      Key={val.id}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      text={val.sname}
                      link={val.link}
                    />
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="m-3">
              {AllopathicBrands[1].map((val) => {
                return (
                  <Col md={3} className="mt-3 mb-3">
                    <BrandCardComponent
                      Key={val.id}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      text={val.sname}
                      link={val.link}
                    />
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="m-3">
              {AllopathicBrands[2].map((val) => {
                return (
                  <Col md={3} className="mt-3 mb-3">
                    <BrandCardComponent
                      Key={val.id}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      text={val.sname}
                      link={val.link}
                    />
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container fluid>
        <h1 className="MyHeading"> Allopathic Medicines </h1>
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
            {AllopathicMedicines.map((val) => {
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
};

export default AllopathicBrandedComponent;
