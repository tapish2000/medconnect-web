import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingsCard from '../cards/BookingsCardComponent';
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
        .get(`https://glacial-caverns-39108.herokuapp.com/booking/past/${id}`)
        .then((response) => {
            console.log(response.data.AllPastBookings);
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
            <div className="jumbotron jumbotron-fluid">
                <div className="display-4 text-uppercase">Booking History</div>
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
                  if(val.medicine_id){
                  val.medicine_id.strength=checkStrength(val.medicine_id.strength);
                  return (
                    <div className="row">
                        <div className="col-sm">
                            <BookingsCard 
                                medName={val.medicine_id.name}
                                shopName={val.shop_id.name} 
                                weight={val.medicine_id.strength}
                                shopAddress={val.shop_id.address} />
                        </div>
                    </div>
                  );
                  }else{
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