import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css';

function BrandCardComponent(props) {
    return (<>
        <img src={props.imgsrc} alt="Avatar" style={{borderRadius:"50%",width:"220px",height:"180px"}}/>
    </>);
}

export default BrandCardComponent;
