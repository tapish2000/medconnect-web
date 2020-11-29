import React,{useEffect,useState} from 'react';

import "./CurrentBookings.css"
import {Container,Row,Col} from 'react-bootstrap';
import CurrentBookingsCard from './CurrentBookingsCard/CurrentBookingsCard';
import Axios from 'axios';



const CurrentBookings=()=>{
    const [loading,setLoading]=useState(true);
    const [waitingData,setWaitingData]=useState([]);

    const [confirmedData,setConfirmedData]=useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:5000/booking/current/shop/5f47e5ea174464ed81cc5100").then((res)=>{
            console.log(res.data.waitingBookings)
            setConfirmedData(res.data.confirmedBookings);
            setWaitingData(res.data.waitingBookings);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const marksAsConfirmed=(booking)=>{
        const newWaitingList=waitingData.filter((waiting_booking)=>{
            return (waiting_booking._id!==booking._id)
        })
        booking.status="confirmed";
        const newConfirmedList=[booking,...confirmedData];
        setWaitingData(newWaitingList);
        setConfirmedData(newConfirmedList);
    }

    const marksAsDone=(booking)=>{
        const newConfirmedList=confirmedData.filter((confirm_booking)=>{
            return (confirm_booking._id!==booking._id)
        })
        booking.status="done";
        setConfirmedData(newConfirmedList);
    }



    return (
        <Container fluid >
            <Row style={{marginLeft:"75px"}} >
                <Col>
                    <div className="waiting-bookings" >
                        <div className="heading-bookings"> 
                            <h1 style={{color:"#E2BC32"}}>WAITING</h1>
                        </div>
                        <div className="list-bookings" >
                            {
                                waitingData.map((booking)=>{
                                    return (<CurrentBookingsCard key={booking._id} data={booking} waiting confirmHandler={()=>{marksAsConfirmed(booking)}}/>);
                                })
                            }                                                                                   
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="current-bookings">
                        <div className="heading-bookings"> 
                            <h1 style={{color:"#30E162"}}>CONFIRMED</h1>
                        </div>
                        <div className="list-bookings" >
                            {
                                confirmedData.map((booking)=>{
                                    return (<CurrentBookingsCard key={booking._id} data={booking} waiting={false} doneHandler={()=>{marksAsDone(booking)}}/>);
                                })
                            }                                                        
                           
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CurrentBookings;