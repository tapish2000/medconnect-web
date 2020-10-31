import React, { Component } from "react";
import "./CartComponent.css"
import {connect} from 'react-redux';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";

class CartComponent extends Component {

  constructor(props){
    super(props);
    this.state={
        
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

  static getDerivedStateFromProps(props, state){
    
        return {
          data: props.data,
          ...state
        }
  }


totalSum = (val) => {
    this.state.sum=0
    this.state.sum += Number(val);
}

onQuantityChanged=(e,medicine)=>{
  console.log(e.target.value);
  this.props.onMedicineQuantityChanged(this.props.data,medicine,e.target.value);
  }

render() {

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
        this.totalSum(row.quantity * row.price);
      return rows.push(
        {
        'img': <img src={row.image_url} alt="" className="img-fluid z-depth-0 image-cart" />,
        'name': [<h5 className="mt-3"><strong>{row.name}</strong></h5>, <p className="text-muted">{row.shopName}</p>],
        'price': `₹ ${row.price}`,
        'qty':
        <>
            <select defaultValue={row.quantity} className="mdb-select md-form" style={{ width: "100px" }} onChange={(e)=>this.onQuantityChanged(e,row)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </>,
        'amount': <strong>₹ {(row.quantity * row.price)}</strong>,
        'button':
        <a href="#">Remove</a>
        }
      )
      
    });

    return (
    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
          <div className="row">
              <div className="col-9">
                <strong>Total Amount: {this.state.sum.toFixed(2)}</strong>
              </div>
              <div className="col-sm">
                  <a className="btn btn-outline-primary" role="button" href="#">Book Now</a>
              </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    );
  }
}

const mapStateToProps = state => {
  return {
      data:state.medicinesInCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onMedicineQuantityChanged: (medicineList,medicine,newQuantity) => {
        let newMedicineList=[...medicineList];
        for(let i=0;i<newMedicineList.length;i++){
          if(newMedicineList[i]===medicine){
            newMedicineList[i].quantity=newQuantity;
          }
        }
        dispatch({type: "MODIFY_CART",medicineList:newMedicineList});
      }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);