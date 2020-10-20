import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MedicineCard from './MedicineCard';
import BrandsCard from './BrandsCard';
import AllopathicBrands from './AllopathicBrands';
import AllopathicMedicines from './AllopathicMedicines';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from '../NavigationComponent';
import Footer from '../footer/FooterComponent';
import './AllopathicBrandedPage.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const AllopathicBrandedPage = () => {
  return (
    <>
      <Container fluid>
        <Navigation />

        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
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
                    <BrandsCard
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
                    <BrandsCard
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
                    <BrandsCard
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
                <MedicineCard
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

      <Container fluid>
        <Footer />
      </Container>
    </>
  );
}

export default AllopathicBrandedPage;