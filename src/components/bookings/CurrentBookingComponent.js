import React from 'react';
import BookingsCard from '../cards/BookingsCardComponent';
import CurrentBookings from './CurrentBookings';

function CurrentBooking(props) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="display-4 text-uppercase">Current Bookings</div>
            </div>
            {
                CurrentBookings.map((val) => {
                    return (
                        <div className="row">
                            <div className="col-sm">
                                <BookingsCard 
                                    medName={val.medName}
                                    shopName={val.shopName} 
                                    weight={val.weight}
                                    shopAddress={val.shopAddress}
                                    deadline={val.deadline} />
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default CurrentBooking;