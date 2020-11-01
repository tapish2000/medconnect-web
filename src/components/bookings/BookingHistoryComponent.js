import React from 'react';
import BookingsCard from '../cards/BookingsCardComponent';
import PastBookings from './PastBookings';

function BookingHistory(props) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="display-4 text-uppercase">Booking History</div>
            </div>
            {
                PastBookings.map((val) => {
                    return (
                        <div className="row">
                            <div className="col-sm">
                                <BookingsCard 
                                    medName={val.medName}
                                    shopName={val.shopName} 
                                    weight={val.weight}
                                    shopAddress={val.shopAddress} />
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default BookingHistory;