import React, { useEffect, useState } from "react";
import './Loading.css'
import { Spinner } from 'react-bootstrap';

const Loading = ({show}) => {
  const [triggerHappy, setRender] = useState(show);
  useEffect(() => {
    if (show) setRender(true);
  }, [show]);
  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };
  return (
    triggerHappy && (
    <div className="spinner-c-overlay" style={{ animation: `${show ? "simpfadeIn 2s" : "simpfadeOut 1s"}`}} onAnimationEnd={onAnimationEnd}>
    <div className="row h-100">
      <div className="col-sm-12 my-auto">
        <div className="p-5 mx-auto" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          <Spinner
            style={{ width: '5vmax', height: '5vmax' }}
            className="loadingSpinner my-auto"
            animation="border"
            variant="primary"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
          <h1 style={{ fontWeight: 'bolder' }}>
            Please wait 
          </h1>
          <span style={{fontSize:"50px"}}>&#128526;</span>
        </div>
      </div>
    </div>
  </div>
    )
  );
};

export default Loading;
