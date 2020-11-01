import React, { Component } from "react";
import axios from 'axios';
import {Spinner} from 'react-bootstrap';
import "./CartComponent.css"
import {connect} from 'react-redux';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";

class CartComponent extends Component {

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
          {
            label: '',
            field: 'button'
          }
      ],
      sum: 0
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/user/cart/view/5f4a95114a72100017272afe')
    .then((response)=>{
      console.log(response)
      this.setState({data:response.data.cart,loading:false});
    }).catch((err)=>{
      console.log(err);
    })
  }


totalSum = (val) => {
    this.state.sum += Number(val);
}

// onQuantityChanged=(e,medicine)=>{
//   console.log(e.target.value);
//   this.props.onMedicineQuantityChanged(this.props.data,medicine,e.target.value);
//   }

render() {
    let sum=0;

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
        sum+=(row.quantity * row.medicine.price);
        
      return rows.push(
        {
        'img': <img src={row.medicine.image_url} alt="" className="img-fluid z-depth-0 image-cart" />,
        'name': [<h5 className="mt-3"><strong>{row.medicine.name}</strong></h5>, <p className="text-muted">{row.shop.name}</p>],
        'price': `₹ ${row.medicine.price}`,
        'qty':
        <>
            <select defaultValue={row.quantity} className="mdb-select md-form" style={{ width: "100px" }}
            //  onChange={(e)=>this.onQuantityChanged(e,row)}
             >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </>,
        'amount': <strong>₹ {(row.quantity * row.medicine.price)}</strong>,
        'button':
        <a href="#">Remove</a>
        }
      )
      
    });

    return (
      (this.state.loading)?(<div className="SpinnerDiv">
      <Spinner
        animation="border"
        variant="info"
        style={{ margin: '5% auto' }}
      />
    </div>):
    (<MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
          <div className="row">
              <div className="col-9">
          <strong>Total Amount: {sum.toFixed(2)}</strong>
              </div>
              <div className="col-sm">
                  <a className="btn btn-outline-primary" role="button" href="#">Book Now</a>
              </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>)
    );
  }
}

// const mapStateToProps = state => {
//   return {
//       data:state.medicinesInCart
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//       onMedicineQuantityChanged: (medicineList,medicine,newQuantity) => {
//         let newMedicineList=[...medicineList];
//         for(let i=0;i<newMedicineList.length;i++){
//           if(newMedicineList[i]===medicine){
//             newMedicineList[i].quantity=newQuantity;
//           }
//         }
//         dispatch({type: "MODIFY_CART",medicineList:newMedicineList});
//       }
//   }
// };


export default (CartComponent);