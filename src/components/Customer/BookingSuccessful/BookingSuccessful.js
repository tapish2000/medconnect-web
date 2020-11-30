import React, { Component } from "react";
import axios from 'axios';
import {withRouter} from "react-router-dom";
import Loading from "../Loading/Loading"
import {Spinner} from 'react-bootstrap';
import success from './success.png'
import "./BookingSuccessful.css"
import {reactLocalStorage} from 'reactjs-localstorage';
import {connect} from 'react-redux';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";

class BookingSuccessful extends Component {

  constructor(props){
    super(props);
    this.state={
        data:[],
        loading:true,
        columns: [
          {
            label: '',
            field: 'img',
          },
          {
            label: <strong>Medicine/Shop Name</strong>,
            field: 'name'
          },
          {
            label: <strong>Price</strong>,
            field: 'price'
          },
          {
            label: <strong>QTY</strong>,
            field: 'qty'
          },
          {
            label: <strong>Amount</strong>,
            field: 'amount'
          },
      ],
      sum: 0
    }
  }

  componentDidMount(){
    console.log(reactLocalStorage.get("isLoggedIn"));
    if(reactLocalStorage.get("isLoggedIn")=="true")
    {      
      const id=reactLocalStorage.get("id");
    axios.get('https://glacial-caverns-39108.herokuapp.com/user/cart/view/'+id)
        .then((response)=>{
          console.log(response)
          this.setState({data:response.data.cart,loading:false});
        }).catch((err)=>{
          console.log(err);
        })}
  else{
        this.props.history.push("/login");
  }
  }


totalSum = (val) => {
    this.state.sum += Number(val);
}


render() {

    console.log(this.state.data)
    let sum=0;

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
        sum+=(row.quantity * row.medicine.price);
        
      return rows.push(
        {
        'img': <img src={row.medicine.image_url} alt="" className="img-fluid z-depth-0 image-cart"  style={{width:"150px"}}/>,
        'name': [<h5 className="mt-3"><strong>{row.medicine.name}</strong></h5>, <p className="text-muted">{row.shop.name}</p>],
        'price': `₹ ${row.medicine.price}`,
        'qty':
        <h5>{row.quantity}</h5>,
        'amount': <strong>₹ {(row.quantity * row.medicine.price)}</strong>,
    
        }
      )
      
    });

    return (
     <>
     <Loading show={this.state.loading}/>
     <div className="successImageDiv">
         <img src={success}/>
         <h1>Thank You for using MedConnect!</h1>
         <h1>You'll receive a mail when the shop confirms your order.</h1>
     </div>
    </>
    );
  }
}

export default withRouter(BookingSuccessful);