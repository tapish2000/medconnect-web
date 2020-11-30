import React from 'react';
import moment from 'moment';

function BookingHistoryCard(props) {
    return (
        <div className="card" id="booking-card" style={{width: "50%", backgroundColor: "#00bcd4"}}>
            <div className="card-body text-left text-light">
                <div className="row">
                    <div className="col-8">
                        {props.medName}
                    </div>
                    <div className="col-1" id="vertical-line"></div>
                    <div className="col-sm">
                        {props.weight}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8" style={{color: "#293035"}}>
                        {props.customer.name}
                    </div>
                    <div className="col-1" id="vertical-line1"></div>
                    <div className="col-sm">
                        Quantity: {props.booking_amount||""}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        {props.customer.phone}
                    </div>
                    <div className="col-1" id="vertical-line"></div>

                    {props.status==="done"?
                    <div className="col-sm" style={{color:"#137310",fontWeight: "bold"}}>
                    {"DELIVERED"}
                    </div>:
                    <div className="col-sm text-danger" >
                    {"EXPIRED"}
                    </div>}

                   

                </div>

                <div className="row">
                    <div className="col-8">
                        {moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                    </div>
                    <div className="col-1" id="vertical-line"></div>

            

                   

                </div>
            </div>
        </div>
    );
}

export default BookingHistoryCard;