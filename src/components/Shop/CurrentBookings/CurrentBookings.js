import React,{useEffect,useState} from 'react';

import "./CurrentBookings.css"
import {Container,Row,Col, Spinner} from 'react-bootstrap';
import CurrentBookingsCard from './CurrentBookingsCard/CurrentBookingsCard';
import Axios from 'axios';
import Loading from "../../Customer/Loading/Loading"
import { reactLocalStorage } from 'reactjs-localstorage';



const CurrentBookings=()=>{
    const [loading,setLoading]=useState(true);
    const [waitingData,setWaitingData]=useState([]);
    const [confirmedData,setConfirmedData]=useState([]);

    const id = reactLocalStorage.get('id');

    useEffect(()=>{
        Axios.get("https://glacial-caverns-39108.herokuapp.com/booking/current/shop/" + id).then((res)=>{
            console.log(res.data)
            setConfirmedData(res.data.confirmedBookings);
            setWaitingData(res.data.waitingBookings);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const marksAsConfirmed= (booking)=>{
        setLoading(true);

        console.log({shop_id:id,
        customer_id:booking.items[0].customer_id._id,
        bookingCreationTime:booking.items[0].bookingCreationTime
       })

         Axios.post("https://glacial-caverns-39108.herokuapp.com/booking/confirm",
        {shop_id:id,
         customer_id:booking.items[0].customer_id._id,
         bookingCreationTime:booking.items[0].bookingCreationTime
        }).then((res)=>{
            console.log(res.data)
            setConfirmedData(res.data.confirmedBookings);
            setWaitingData(res.data.waitingBookings);
            setLoading(false);
                
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    const marksAsDone= (booking)=>{
        setLoading(true);
        console.log({shop_id:id,
        customer_id:booking.items[0].customer_id._id,
        bookingCreationTime:booking.items[0].bookingCreationTime
       })

         Axios.post("https://glacial-caverns-39108.herokuapp.com/booking/delivered",
        {shop_id:id,
         customer_id:booking.items[0].customer_id._id,
         bookingCreationTime:booking.items[0].bookingCreationTime
        }).then((res)=>{
            console.log(res.data)
            setConfirmedData(res.data.confirmedBookings);
            setWaitingData(res.data.waitingBookings);
            setLoading(false);
                
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    const rejectBooking= (booking)=>{
        setLoading(true);
        console.log({shop_id:id,
        customer_id:booking.items[0].customer_id._id,
        bookingCreationTime:booking.items[0].bookingCreationTime
       })

         Axios.post("https://glacial-caverns-39108.herokuapp.com/booking/reject",
        {shop_id:id,
         customer_id:booking.items[0].customer_id._id,
         bookingCreationTime:booking.items[0].bookingCreationTime
        }).then((res)=>{
            console.log(res.data)
            setConfirmedData(res.data.confirmedBookings);
            setWaitingData(res.data.waitingBookings);
            setLoading(false);                
        }).catch((err)=>{
            console.log(err);
        })
        
    }



    return (
        <>
       
        <Container fluid >
            <Row style={{marginLeft:"75px"}} >
                <Col>
                    <div className="waiting-bookings" >
                        <div className="heading-bookings"> 
                            <h1 style={{color:"#eb5e28"}}>WAITING</h1>
                        </div>
                        <div className="list-bookings" >
                            {
                                (loading)?
                                (<div className="SpinnerDivCurrentBookings">
                                <Spinner animation="border" size="lg" variant="info" />
                                </div>):
                                <>
                                {
                                    (waitingData.length==0)?
                                        ( <h3 className="empty-message-CurrentBookings">Waiting List is empty</h3>  )
                                    :
                                    (waitingData.map((booking)=>{
                                        return (<CurrentBookingsCard key={booking.items[0].bookingCreationTime} data={booking} waiting confirmHandler={()=>{marksAsConfirmed(booking)}} rejectHandler={()=>{rejectBooking(booking)}}/>);
                                    }))
                                }
                                </>
                                
                            }                                                                                   
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="current-bookings">
                        <div className="heading-bookings"> 
                            <h1 style={{color:"#00a7e1"}}>CONFIRMED</h1>
                        </div>
                        <div className="list-bookings" >
                            {
                                (loading)?
                                ( <div className="SpinnerDivCurrentBookings">
                                <Spinner animation="border" size="lg" variant="info" />
                                </div>):
                                <>  
                                    {
                                        (confirmedData.length===0)?
                                        ( <h3 className="empty-message-CurrentBookings">Confirmed List is empty</h3>  ):
                                                (confirmedData.map((booking)=>{
                                                    return (<CurrentBookingsCard key={booking.items[0].bookingCreationTime} data={booking} waiting={false} doneHandler={()=>{marksAsDone(booking)}}/>);
                                                }))
                                    }
                                </>
                                
                            }                                                        
                           
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default CurrentBookings;