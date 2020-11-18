import React from 'react';
import moment from 'moment';

function BookingsCard(props) {
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
                    <div className="col-8" style={{color: "lightgray"}}>
                        {props.shopName}
                    </div>
                    <div className="col-1" id="vertical-line1"></div>
                </div>
                <div className="row">
                    <div className="col-8">
                        {props.shopAddress}
                    </div>
                    <div className="col-1" id="vertical-line"></div>
                    <div className="col-sm text-danger">
                        {props.deadline ? moment().add(Number(props.deadline), 'm').format('hh:mm:ss') : "CONFIRMED"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingsCard;