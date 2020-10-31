import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            src="https://cdn.mindful.org/how-to-meditate.jpg"
            alt="First slide"
            height="600px"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://vhx.imgix.net/makematic/assets/18b2f634-9524-4c4e-b7a7-50a437d08845-18f32d38.png?auto=format%2Ccompress&fit=crop&h=360&w=640"
            alt="Second slide"
            height="600px"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www1.specialolympicsontario.com/healthy-at-home/wp-content/uploads/sites/63/2020/03/Healthy-at-Home-Logo-01.png"
            alt="Third slide"
            height="600px"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-b.medlife.com/2020/03/coronavirus-dos-donts.jpg"
            alt="Third slide"
            height="600px"
          />
  
          
        </Carousel.Item>
      </Carousel>
      </>
    );
  }

export default HomeCarouselComponent;