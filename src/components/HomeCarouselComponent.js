import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeCarouselComponent = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/301"
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption>
            <h3>MedConnect</h3>
            <p>Serach your Medicines Here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/201/300"
            alt="Second slide"
            height="600px"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Save Your Time</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/300"
            alt="Third slide"
            height="600px"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              We Are Here To Help You
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/301"
            alt="Third slide"
            height="600px"
          />
  
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }

export default HomeCarouselComponent;