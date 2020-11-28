import React, { Component } from "react";
import axios from 'axios';
import {withRouter,Link} from "react-router-dom";
import Loading from "../Loading/Loading"
import {Button, Spinner,Modal} from 'react-bootstrap';
import "./CartComponent.css"
import Slider from '@material-ui/core/Slider';
import {reactLocalStorage} from 'reactjs-localstorage';
import {connect} from 'react-redux';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";

class CartComponent extends Component {


   handleClose = () => this.setState({showModal:false});
   handleShow = () => {
     this.verifyPrescriptionUploads();
     this.setState({showModal:true})
    };
   goAheadHandler=()=>{
     let params = {
       customer_id : reactLocalStorage.get("id"),
       data : this.state.data,
       timeRange : this.state.timeRange,
       uploadedFiles : this.state.uploadedFiles,
     }
     axios({
       method : "post",
       url : 'http://localhost:5000/booking/book_all',
       data : params
     }).then((res)=>{
       if(res.data==="booking done"){
          this.props.history.push('/SuccessfulBooking')
       }
     }).catch((err)=>{
       console.log(err);
     })
   }

  constructor(props){
    super(props);
    this.state={
        data:[],
        uploadedFilesForDisplaying:{},
        uploadedFiles:[],
        timeRange:30,
        showModal:false,
        loading:true,
        canBook:false,
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
            label: <strong>Action</strong>,
            field: 'button1'
          },
          {
            label: <strong>Prescription</strong>,
            field: 'button2'
          }
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

onQuantityChanged=async (e,item)=>{

  let newQuantity=e.target.value;
  if(reactLocalStorage.get("isLoggedIn")=="true")
    {      
      const id=await reactLocalStorage.get("id");
      
      //make api call
      this.setState({loading:true})
      await axios.post("https://glacial-caverns-39108.herokuapp.com/user/cart/changeQuantity/"+id,{medicineItem:{medicine:item.medicine._id,shop:item.shop._id,_id:item._id,quantity:item.quantity},newQuantity,}).then((response)=>{
            console.log(response)
            this.props.onMedicineChanged();
        }).catch((err)=>{
            console.log(err);
        })
      await axios.get('https://glacial-caverns-39108.herokuapp.com/user/cart/view/'+id)
      .then((response)=>{
        console.log(response)
        this.setState({data:response.data.cart,loading:false});
      }).catch((err)=>{
        console.log(err);
      })
    }
  else{
        this.props.history.push("/login");
  }
}

removeItemHandler= async (item)=>{
  //make api call
  if(reactLocalStorage.get("isLoggedIn")=="true"){
    const id=await reactLocalStorage.get("id");
  console.log(item,"REMOVE")
  this.setState({loading:true})
  await axios.post("https://glacial-caverns-39108.herokuapp.com/user/cart/removeMedicine/"+id,{medicineItem:{medicine:item.medicine._id,shop:item.shop._id,_id:item._id,quantity:item.quantity}}).then((response)=>{
        console.log(response)
        this.props.onMedicineRemoved();
    }).catch((err)=>{
        console.log(err);
    })
  await axios.get('https://glacial-caverns-39108.herokuapp.com/user/cart/view/'+id)
  .then((response)=>{
    console.log(response)
    this.setState({data:response.data.cart,loading:false});
  }).catch((err)=>{
    console.log(err);
  })
}else{
  this.props.history.push("/login");
}
}


onPrescriptionUpload=(e,item)=>{
  console.log(item,e.target.files[0])
  let formData = new FormData();
  formData.append("prsc",e.target.files[0],e.target.files[0].name);

  const fileName=e.target.files[0].name;
  console.log(fileName);
  axios({
    method: "post",
    url: "https://glacial-caverns-39108.herokuapp.com/images/upload",
    data: formData,
    headers: {'Content-Type':'multipart/form-data'}
  }).then((res)=>{
    let file = {
      med_id : item.medicine._id,
      pr_url : res.data
    }
    let uploadedFiles = [...this.state.uploadedFiles]
    uploadedFiles.push(file)
    let uploadedFilesForDisplaying={...this.state.uploadedFilesForDisplaying};
    uploadedFilesForDisplaying[item._id]=fileName;
    console.log("Here",uploadedFilesForDisplaying);
    this.setState({uploadedFiles,uploadedFilesForDisplaying})
  }).catch((err)=>{
    console.log(err);
  })
}

verifyPrescriptionUploads=()=>{
  let flag=true;

  for(let i=0;i<this.state.data.length;i++){
    const item=this.state.data[i];
    console.log(item);
    if(item.medicine.prescription){
      // let find = this.state.uploadedFiles.find(el=>el.med_id===item.medicine._id);
      let j = 0
      for(;j<this.state.uploadedFiles.length;j++){
      //   console.log(this.state.uploadedFiles[j]);
        // console.log(item.medicine._id);
        if(this.state.uploadedFiles[j].med_id===item.medicine._id){
          break;
        }
      }
      // // console.log(find);
      if(j==this.state.uploadedFiles.length){
        flag=false;
        break;
      }
    }
  }
  this.setState({canBook:flag});
  
}

onTimeChangeHandler=(e,value)=>{
    //console.log(value);
    this.setState({timeRange:value});
}

render() {   
    let sum=0;

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
        sum+=(row.quantity * row.medicine.price);
        
        console.log(this.state.uploadedFilesForDisplaying[row._id]);
      return rows.push(
        {
        'img': <img src={row.medicine.image_url} alt="" className="img-fluid z-depth-0 image-cart" style={{width:"150px"}} />,
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
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
               
            </select>
        </>,
        'amount': <strong>₹ {(row.quantity * row.medicine.price)}</strong>,
        'button1':<span onClick={()=>this.removeItemHandler(row)} className="RemoveButton-Cart">Remove</span>,
        'button2': (row.medicine.prescription) ? (
          <div>
            <input type="file" style={{display:'none'}} id="prescription" onChange={(e)=>this.onPrescriptionUpload(e,row)}/> 
            <Button type="file" htmlFor="prescription" as={"label"} variant="outline-warning">Upload</Button>
            <p className="fileName-Cart">{this.state.uploadedFilesForDisplaying[row._id]?this.state.uploadedFilesForDisplaying[row._id]:""}</p>
          </div>
        ) : ''
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
                  <Button variant="info" size="lg" onClick={this.handleShow}>Book Now</Button>
            
                 
              </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>

    <Modal show={this.state.showModal} className="confirmBookingModal" onHide={this.handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {
            (!this.state.canBook)?(<p className="prescription-failure-cart">Please Upload all prescriptions to continue.</p>):
            (
            <>
            <p className="prescription-success-cart">All prescriptions have been uploaded.</p>
            <p className="prescription-success-cart">Please go ahead with the booking.</p>
            </>
            )
          }
          <Slider
            defaultValue={30}
            // getAriaValueText={}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            color="primary"
            step={10}
            marks
            min={10}
            onChangeCommitted={this.onTimeChangeHandler}
            max={110}
          />
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="danger" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={this.goAheadHandler} disabled={!this.state.canBook}>
            Go Ahead
          </Button>
        </Modal.Footer>
      </Modal>
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
      
      onMedicineChanged: ()=>{
        dispatch({type: "GET_CART_AMOUNT"})},
      }
  }



export default connect(null,mapDispatchToProps)(withRouter(CartComponent));