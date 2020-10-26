import React from 'react';
import './AllopathicBrandedComponent.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MedicineCardComponent from '../cards/MedicineCardComponent';
import BrandCardComponent from '../cards/BrandCardComponent';
import AllopathicBrands from './AllopathicBrands';
import AllopathicMedicines from './AllopathicMedicines';
import Carousel from 'react-bootstrap/Carousel';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const AllopathicBrandedComponent = () => {
  return (
    <>
      <Container fluid>

        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Allopathic Branded</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container fluid>
        <h1 className="MyHeading"> Allopathic Top Brands </h1>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Row className="m-3">
              {AllopathicBrands.map((val) => {
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
              {AllopathicBrands.map((val) => {
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
              {AllopathicBrands.map((val) => {
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
        <Row className="m-3">
          {AllopathicMedicines.map((val) => {
            return (
              <Col md={3} className="mt-3 mb-3">
                <MedicineCardComponent
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
      </Container>
    </>
  );
}

export default AllopathicBrandedComponent;