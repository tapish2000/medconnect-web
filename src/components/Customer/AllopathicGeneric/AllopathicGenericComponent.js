import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MedicineCardComponent from '../cards/MedicineCardComponent';
import './AllopathicGenericComponent.css';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const AllopathicGenericComponent = () => {

  const [AllopathicGenMedicines, setAllopathicGenMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://glacial-caverns-39108.herokuapp.com/medicine/allopathic/generic')
      .then((response) => {
        console.log(response);
        setAllopathicGenMedicines(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container fluid>
        <h1 className="MyHeading"> Allopathic Generic Medicines </h1>
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
            {AllopathicGenMedicines.map((val) => {
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
                    prsc={val.prescription}
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

export default AllopathicGenericComponent;