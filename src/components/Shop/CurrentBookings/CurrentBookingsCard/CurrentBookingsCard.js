import React from 'react';
import "./CurrentBookingsCard.css"
import {Button} from "react-bootstrap"
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import moment from 'moment';

function CurrentBookingsCard({data,waiting,confirmHandler,doneHandler,rejectHandler}) {
    const customerData=data.items[0].customer_id;

    const OpenPrescription=(fileName)=>{
        window.open("https://glacial-caverns-39108.herokuapp.com/images/"+fileName,"_blank")
    }
    let backgroundColor="#ce6c3b";
    if(!waiting){
        backgroundColor="#00a7e1";
    }
    return (
        <div className="root-CurrentBookingsCard fade-in-fwd" style={{backgroundColor}}>
            <div className="card-body text-light">
                <div className="row">
                    <div className="col-6 text-left">
                        <p>Total: ₹{data.totalAmount}</p>                        
                    </div>
               
                    <div className="col-6 text-right">
                        <p> {customerData.name}</p>
                       
                        <p>{customerData.phone}</p>
                    </div>
                </div> 
                <p>Deadline: {moment(data.items[0].deadline).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                 
                {/* <div className="hr-custom"/>    */}
                <div style={{marginTop:"2%"}}>
                <MDBTable hover bordered>
                    <MDBTableHead>
                        <tr>
                        <th>Medicine</th>
                        <th>Quantity</th>
                        <th>Prescription</th>            
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data.items.map((item)=>{
                                return (
                                    <tr>
                                        <td>{item.medicine_id.name} (₹{item.medicine_id.price})</td>
                                        <td>{item.booking_amount}</td>
                                        <td>{item.prescription_url?<Button variant="outline-light" onClick={()=>OpenPrescription(item.prescription_url)} size="sm">View</Button>:"NA"}</td>
                                    </tr>
                                )
                            })
                        }
                    </MDBTableBody>
                    </MDBTable>
                </div> 
                <div className="row">
                    <div className="col-6">
                         {(waiting)?
                        (<Button variant="light" style={{color:"#343a40",fontSize:"17px"}} onClick={rejectHandler}>Reject</Button>)
                        :
                        null}
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