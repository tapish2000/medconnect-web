import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./BookingHistory.css"
import BookingsCard from '../../Customer/cards/BookingsCardComponent';
import BookingHistoryCard from "./BookingHistoryCard"
import Spinner from 'react-bootstrap/Spinner';
import {reactLocalStorage} from 'reactjs-localstorage';

function BookingHistory(props) {

    const [pastBookings, setpastBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    var checkStrength = (strength)=>{
        if(strength.length === 0){
            return "Not Applicable";
        }
        return strength;
    }

    useEffect(() => {

        // if(reactLocalStorage.get('id') === null || reactLocalStorage.get('id') === undefined || reactLocalStorage.get('id').length === 0){
        //     props.history.push('/');
        //     return;
        // }
        let id = reactLocalStorage.get('id');
        axios
        .get(`http://localhost:5000/booking/past/${id}`)
        .then((response) => {
            console.log(response.data);
            setpastBookings(response.data.AllPastBookings);
            // console.log(pastBookings);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <>
          
            <div className="heading-BookingHistory">
                        <h1 style={{fontSize:"3vw"}}>BOOKING HISTORY</h1>
                        
                 </div>
            

        {loading ? (
          <div className="SpinnerDiv">
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: 'auto' }}
            />
          </div>
        ) : (
          <>
          {pastBookings.length == 0 ? 
            (
              <h1>No Bookings Confirmed Yet</h1>
            ) : (
              <div>
                {pastBookings.map((val) => {
                if(val.medicine_id)
                  {val.medicine_id.strength=checkStrength(val.medicine_id.strength);
                  return (
                    <div className="row">
                        <div className="col-sm">
                            <BookingHistoryCard
                                status={val.status} 
                                createdAt={val.createdAt}
                                expired={val.expired}
                                medName={val.medicine_id.name}
                                shopName={val.shop_id.name} 
                                customer={val.customer_id}
                                booking_amount={val.booking_amount}
                                weight={val.medicine_id.strength || ""}
                                shopAddress={val.shop_id.address} />
                        </div>
                    </div>
                  );}
                  else{
                      return null;
                  }
                })}
              </div>
            )}
          </>
        )}
        </>
    );
}

export default BookingHistory;