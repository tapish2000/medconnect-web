import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MedicineCard from './MedicineCard';
import AyurvedaGenericMedicines from './AyurvedaGenericMedicines';
import Navigation from '../NavigationComponent';
import Footer from '../footer/FooterComponent';
import './AyurvedaGenericPage.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const AyurvedaGenericPage = () => {
  return (
    <>
      <Container fluid>
        <Navigation />

        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Ayurveda Generic</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container fluid>
        <h1 className="MyHeading"> Ayurveda Generic Medicines </h1>
        <Row className="m-3">
          {AyurvedaGenericMedicines.map((val) => {
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

export default AyurvedaGenericPage;