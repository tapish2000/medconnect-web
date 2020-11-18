import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingsCard from '../cards/BookingsCardComponent';
import Spinner from 'react-bootstrap/Spinner';
import {reactLocalStorage} from 'reactjs-localstorage';



function CurrentBooking(props) {

    const [currentBookings, setcurrentBookings] = useState([]);
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
        .get(`https://glacial-caverns-39108.herokuapp.com/booking/current/${id}`)
        .then((response) => {
            console.log(response.data);
            setcurrentBookings(response.data.currentBooking);
            // console.log(currentBookings);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="display-4 text-uppercase">Current Bookings</div>
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
          {currentBookings.length == 0 ?
            (
              <h1>No Current Bookings Recently</h1>
            ) : (
                  <div>
                {currentBookings.map((val) => {
                    
                    val.medicine_id.strength=checkStrength(val.medicine_id.strength);

                  return (
                    <div className="row">
                        <div className="col-sm">
                            <BookingsCard 
                                medName={val.medicine_id.name}
                                shopName={val.shop_id.name} 
                                weight={val.medicine_id.strength}
                                shopAddress={val.shop_id.address}
                                deadline={val.time_range} />
                        </div>
                    </div>
                    );
                  })}
                </div>
              )
           };
          </>
        )}
        </>
    );
}

export default CurrentBooking;