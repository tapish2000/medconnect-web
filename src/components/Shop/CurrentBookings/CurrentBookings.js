import React,{useEffect,useState} from 'react';
import "./CurrentBookings.css"
import {Container,Row,Col} from 'react-bootstrap';
import CurrentBookingsCard from './CurrentBookingsCard/CurrentBookingsCard';


const CurrentBookings=()=>{

    const [waitingData,setWaitingData]=useState([
        {
            _id:"1",
            name:"Mir Sameed Ali",
            contact:"7093744535",
            items:[
                {
                    medicine:{
                        name: "Wikoryl",
                        manufacturer: "xyz Pharma",
                        strength: "200mg",
                        price:50.00,
                    },
                    quantity: 2
                },
                {
                    medicine:{
                        name: "Propygenta",
                        manufacturer: "xyz Pharma",
                        strength: "200mg",
                        price:50.00,
                    },
                    quantity: 3
                },
            ],
            status: "waiting",
            totalAmount: 250.00,
        },
        {
            _id:"2",
            name:"Mir Osayd Ali",
            contact:"7093744535",
            items:[
                {
                    medicine:{
                        name: "Wikoryl",
                        manufacturer: "xyz Pharma",
                        strength: "200mg",
                        price:50.00,
                    },
                    quantity: 2
                },
                {
                    medicine:{
                        name: "Propygenta",
                        manufacturer: "xyz Pharma",
                        strength: "200mg",
                        price:50.00,
                    },
                    quantity: 3
                },
            ],
            status: "waiting",
            totalAmount: 250.00,
        }
    ]);

    const [confirmedData,setConfirmedData]=useState([
        {
            _id:"3",
            name:"Mir Zahed Ali",
            contact:"7093744535",
            items:[
                {
                    medicine:{
                        name: "Wikoryl",
                        manufacturer: "xyz Pharma",
                        strength: "200mg",
                        price:50.00,
                    },
                    quantity: 2
                },
                {
                    medicine:{
                        name: "Propygenta",
                        manufacturer: "xyz Pharma",
                        strength: "200mg",
                        price:50.00,
                    },
                    quantity: 3
                },
            ],
            status: "confirmed",
            totalAmount: 250.00,
        }
    ]);

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