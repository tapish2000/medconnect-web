import React from 'react';
import "./CurrentBookingsCard.css"
import {Button} from "react-bootstrap"
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import moment from 'moment';

function CurrentBookingsCard({data,waiting,confirmHandler,doneHandler}) {
    return (
        <div className="root-CurrentBookingsCard fade-in-fwd">
            <div className="card-body text-light">
                <div className="row">
                    <div className="col-6 text-left">
                        TOTAL: ₹{data.totalAmount}
                    </div>
               
                    <div className="col-6 text-right">
                        <p> {data.name}</p>
                       
                        <p>{data.contact}</p>
                    </div>
                </div> 
                 
                {/* <div className="hr-custom"/>    */}
                <div style={{marginTop:"2%"}}>
                <MDBTable hover bordered>
                    <MDBTableHead>
                        <tr>
                        <th>Medicine</th>
                        <th>Quantity</th>          
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data.items.map((item)=>{
                                return (
                                    <tr>
                                        <td>{item.medicine.name} (₹{item.medicine.price})</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            })
                        }
                    </MDBTableBody>
                    </MDBTable>
                </div> 
                <div className="row">
                    <div className="col-6">
                        <Button variant="light" style={{fontSize:"17px"}}>View Prescriptions</Button>
                    </div>
                    <div className="col-6 text-right">
                        {(waiting)?
                        (<Button variant="dark" style={{color:"#E2BC32",fontSize:"17px"}} onClick={confirmHandler}>Confirm</Button>)
                        :
                        <Button variant="dark" style={{color:"#30E162",fontSize:"17px"}} onClick={doneHandler}>Done</Button>}
                    </div>
                </div>          
            </div>
        </div>
    );
}




export default CurrentBookingsCard;