import React, { Component } from "react";
import axios from 'axios';
import Loading from "../Loading/Loading"
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
    axios.get('https://glacial-caverns-39108.herokuapp.com/user/cart/view/5f4a95114a72100017272afe')
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

onQuantityChanged=async (e,item)=>{
  console.log(e.target.value);
  //make api call
  this.setState({loading:true})
  await axios.post("https://glacial-caverns-39108.herokuapp.com/user/cart/changeQuantity/5f4a95114a72100017272afe",{medicineItem:{medicine:item.medicine._id,shop:item.shop._id,_id:item._id,quantity:item.quantity},newQuantity:e.target.value}).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err);
    })
  await axios.get('https://glacial-caverns-39108.herokuapp.com/user/cart/view/5f4a95114a72100017272afe')
  .then((response)=>{
    console.log(response)
    this.setState({data:response.data.cart,loading:false});
  }).catch((err)=>{
    console.log(err);
  })

}

removeItemHandler= async (item)=>{
  //make api call
  console.log(item,"REMOVE")
  this.setState({loading:true})
  await axios.post("https://glacial-caverns-39108.herokuapp.com/user/cart/removeMedicine/5f4a95114a72100017272afe",{medicineItem:{medicine:item.medicine._id,shop:item.shop._id,_id:item._id,quantity:item.quantity}}).then((response)=>{
        console.log(response)
        this.props.onMedicineRemoved();
    }).catch((err)=>{
        console.log(err);
    })
  await axios.get('https://glacial-caverns-39108.herokuapp.com/user/cart/view/5f4a95114a72100017272afe')
  .then((response)=>{
    console.log(response)
    this.setState({data:response.data.cart,loading:false});
  }).catch((err)=>{
    console.log(err);
  })
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
        'img': <img src={row.medicine.image_url} alt="" className="img-fluid z-depth-0 image-cart" />,
        'name': [<h5 className="mt-3"><strong>{row.medicine.name}</strong></h5>, <p className="text-muted">{row.shop.name}</p>],
        'price': `₹ ${row.medicine.price}`,
        'qty':
        <>
            <select defaultValue={row.quantity} className="mdb-select md-form" style={{ width: "100px" }}
             onChange={(e)=>this.onQuantityChanged(e,row)}
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
        
        <span onClick={()=>this.removeItemHandler(row)} className="RemoveButton-Cart">Remove</span>
        }
      )
      
    });

    return (
     <>
     <Loading show={this.state.loading}/>
    <MDBRow className="my-2" center>
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
    </MDBRow>
    </>
    );
  }
}







// const mapStateToProps = state => {
//   return {
//       data:state.medicinesInCart
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
      onMedicineRemoved: ()=>{
        dispatch({type: "GET_CART_AMOUNT"})},
      }
  }



export default connect(null,mapDispatchToProps)(CartComponent);