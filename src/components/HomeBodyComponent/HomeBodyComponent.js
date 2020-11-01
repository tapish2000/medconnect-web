import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BrandCardComponent from '../cards/BrandCardComponent';
import DailyUseCardComponent from '../cards/DailyUseCardComponent';
import TopBrands from './TopBrands'
import DailyUse from './DailyUse'
import Carousel from 'react-bootstrap/Carousel';
// import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';
import './HomeBodyComponent.css';


const HomeBodyComponent = () => {


    const [DailyUseMedicine, setDailyUseMedicine] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get('https://glacial-caverns-39108.herokuapp.com/medicine/dailyUseMedicine')
        .then((response) => {
          console.log(response);
          // console.log(response.data.data);
          let modifiedData = [];
          let idx = 0;
          let innerDataArray = [];
          while(idx<response.data.data.length){
            while(innerDataArray.length<4 && idx<response.data.data.length){
              innerDataArray.push(response.data.data[idx]);
              idx+=1;
            }
            modifiedData.push(innerDataArray);
            innerDataArray = [];
            // idx = 0;
          }

          console.log(modifiedData);

          setDailyUseMedicine(modifiedData);
          // console.log(DailyUseMedicine);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <>
      <Container fluid>
        <h1 className="MyHeading"> Top Brands </h1>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Row className="m-3">
              {TopBrands.map((val) => {
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
              {TopBrands.map((val) => {
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
              {TopBrands.map((val) => {
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
        <h1 className="MyHeading"> Daily Use </h1>
            
          {loading ? (
          <div className="SpinnerDiv">
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: 'auto' }}
            />
          </div>
        ) : (
          <Carousel indicators={false}>
          
            {DailyUseMedicine.map((val) => {
              return (
              <Carousel.Item>
                <Row className="m-3">
                  {val.map((data)=>{
                    return (
                      <Col md={3} className="mt-3 mb-3">
                        <DailyUseCardComponent
                          Key={data._id}
                          imgsrc={data.image_url}
                          title={data.name}
                          manufacturer={data.manufacturer}
                          strength={data.strength}
                          price={data.price}
                          id={data._id}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Carousel.Item>)
            })}
          
          </Carousel>
          
        )}
      </Container>
    </>
  );
}

export default HomeBodyComponent;