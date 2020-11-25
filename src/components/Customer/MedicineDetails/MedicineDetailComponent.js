import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import './MedicineDetailsComponent.css';
import MedicineInfoComponent from '../cards/medicineInfoComponent';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Spinner from 'react-bootstrap/Spinner';
import iconImage from './defaultUser.png'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';

function MedicineDetails(props) {
  // console.log(props);
  // console.log(e);

  const [finalShop, setFinalShop] = useState({});
  const [searchedShopList, setSearchedShopList] = useState([]);
  const [searchShop, setSearchShop] = useState("");
  const [shopList, setShopList] = useState([]);
  const [quantity, setQuantity] = useState(1);
  var [selectedShop, setSelectedShop] = useState("");
  const [MedicineData, setMedicineData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoggedIn,setisLoggedIn] = useState(reactLocalStorage.get('isLoggedIn'));
  const [userID,setUserID] = useState(reactLocalStorage.get('id'));

  const fn1=()=>{
    document.getElementById("hide").style.display = "block";
  }

  const handleSearchShop = (val) => {
    var params = {
      med_id: MedicineData._id
    }
    // console.log(val);
    setSearchShop(val);
    if (val != "") {
      axios({
        method: "post",
        url: 'https://glacial-caverns-39108.herokuapp.com/shop/fetch/' + `${val}`,
        data: params
      })
      .then(function (response) {
        console.log(response.data);
        setSearchedShopList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      setSearchedShopList([]);
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var body={
      user_id: userID,
      comment: comment
    }
    axios({
      method: 'post',
      url: 'https://glacial-caverns-39108.herokuapp.com/medicine/comment/' + `${MedicineData._id}`,
      data: body
    })
    .then(function (response) {
        // console.log(response.data);
        setComments(response.data);
        setComment("");
    })
    .catch(function (error) {
        console.log(error);
        setComment("");
    });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(process.env.REACT_APP_BASE_URL);
    const id = props.match.params.id;
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/medicine/${id}`)
      .then((response) => {
        console.log(response.data);
        setMedicineData(response.data);
        setComments(response.data.comments);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const increment = () => {
    setQuantity(quantity+1);
  }

  const decrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity-1);
    }
  }

  const shopSelected = () => {
    var sel = document.getElementById("select-shop1");
    // console.log(selectedShop);
    try {
      selectedShop = sel.options[sel.selectedIndex].value;
      setSelectedShop(selectedShop);
      // console.log(selectedShop);
      var show = document.getElementById("show-shop");
      show.value = shopList[selectedShop].name;

      var addToCart = document.getElementById("cart-add");
      addToCart.className = "btn btn-info";

      setFinalShop(shopList[selectedShop]);
    } catch(err) {
      console.log(err);
      window.alert("Shop Not Selected!")
    }
  }

  const shopSearchedSelected = () => {
    var sel = document.getElementById("select-shop2");
    // console.log(selectedShop);
    try {
      selectedShop = sel.options[sel.selectedIndex].value;
      setSelectedShop(selectedShop);
      // console.log(selectedShop);
      var show = document.getElementById("show-shop");
      show.value = searchedShopList[selectedShop].name;

      var addToCart = document.getElementById("cart-add");
      addToCart.className = "btn btn-info";

      setFinalShop(searchedShopList[selectedShop]);
    } catch(err) {
      console.log(err);
      window.alert("Shop Not Selected!")
    }
  }

  const getShops = () => {
    var medicine = [{
      name : MedicineData.name,
      _id : MedicineData._id
    }]
    const params = JSON.stringify({
      latitude : "29.364138",
      longitude : "76.972546",
      tags : medicine,
      travelMode : "walking"
    })
    axios.post('https://glacial-caverns-39108.herokuapp.com/search',params,{
        "headers": {
            "content-type": "application/json",
        },
    }).then((res)=>{
        var shops = res.data.shops;
        console.log(shops);
        setShopList(shops);
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log(medicine);
  }

  const addToCartHandler = () => {
    console.log(finalShop);
    const isLoggedIn = reactLocalStorage.get("isLoggedIn");
    if(isLoggedIn=="true")
        props.onAddToCart(finalShop);
    else
        props.history.push("/login");
  }

  return (
    <>
      {loading ? (
        <div
          style={{
            padding: '5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner animation="border" variant="primary" size="lg" />
        </div>
      ) : (
        <>
          <Card className="DetailsCard" id="cardDesign">
            <Card.Body className="DetailsCardBody">
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <Card.Img
                      className="medicineImage"
                      variant="top"
                      src={MedicineData.image_url}
                      id="image"
                    />
                  </div>
                  <div className="col-sm">
                    <div className="row">
                      <Card.Title id="card-head">
                        {MedicineData.name}
                      </Card.Title>
                      {/* <Card.Subtitle id="card-head">Shop Name</Card.Subtitle> */}
                      <MedicineInfoComponent
                        style={{ margin: '5%' }}
                        saltName="paracetamol"
                        medicineWeight={MedicineData.strength}
                        manufacturerName={MedicineData.manufacturer}
                        prescription={MedicineData.prescription ? 'Yes' : 'No'}
                        amount={'₹' + MedicineData.price}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-4 quantity-input">
                        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
                          &mdash;
                        </button>
                        <input className="quantity-input__screen" type="text" value={quantity} readonly />
                        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                          &#xff0b;
                        </button>
                      </div>
                      <div className="col-sm-4 text-right my-auto">
                        <div className="row">
                          
                          <button className="btn btn-info" type="button" data-toggle="modal" data-target="#selectshop" onClick={getShops}>Select Shop</button>
                            
                          {/* Modal Start */}
                          <div className="modal fade" id="selectshop" tabindex="-1" role="dialog" aria-labelledby="selectShop" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <ul className="nav nav-tabs md-tabs tabs-2 darken-3" role="tablist">
                                  <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fas fa-user mr-1"></i>
                                      Select Shop</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fas fa-user-plus mr-1"></i>
                                      Search Shops</a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                                    {/* Body */}                                  
                                    <div className="modal-body mb-1">
                                      <form>
                                        <label style={{justifyContent: "left"}}>Nearest Shops</label>
                                        <select id="select-shop1" multiple className="form-control">
                                          {shopList.map((shop, index) => {
                                            return (
                                              <>
                                                <option value={index}>{shop.name}</option>
                                              </>
                                            );
                                          })}
                                        </select>
                                      </form>
                                    </div>
                                    {/* Footer- */}                                    
                                    <div className="modal-footer">
                                      <button type="submit" className="btn btn-outline-info" data-dismiss="modal" onClick={shopSelected}>Save</button>
                                      <button type="button" className="btn btn-outline-info" data-dismiss="modal">Close</button>
                                    </div>

                                  </div>
                                  
                                  <div className="tab-pane fade" id="panel8" role="tabpanel">

                                    {/* Body */}                                  
                                    <div className="modal-body">
                                      <form>
                                        <input onChange={(event)=>handleSearchShop(event.target.value)} value={searchShop} className="form-control" type="text" placeholder="Search Shops Here..." />
                                        <select id="select-shop2" className="form-control" multiple>
                                        {searchedShopList.map((shop, index) => {
                                          return (
                                            <option value={index}>{shop.name}</option>
                                          );
                                        })}
                                      </select>
                                      </form>
                                    </div>
                                    {/* Footer- */}                                    
                                    <div className="modal-footer">
                                      <button type="submit" className="btn btn-outline-info" data-dismiss="modal" onClick={shopSearchedSelected}>Save</button>
                                      <button type="button" className="btn btn-outline-info" data-dismiss="modal">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Modal End */}

                        </div>
                        <div className="row">
                          <input id="show-shop" type="text"></input>
                        </div>
                      </div> 
                      <div className="col-sm-4 my-auto">
                        <a
                        id="cart-add"
                        role="button"
                        className="btn btn-info disabled"
                        onClick={addToCartHandler}
                        >
                        Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <Card>
                      <Card.Body>
                        <Card.Title>Disclaimer</Card.Title>
                        <Card.Text className="text-muted">
                          The contents of this website are for informational
                          purposes only and not intended to be a substitute for
                          professional medical advice, diagnosis, or treatment.
                          Please seek the advice of a physician or other
                          qualified health provider with any questions you may
                          have regarding a medical condition. Do not disregard
                          professional medical advice or delay in seeking it
                          because of something you have read on this website.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  {/* {props.showBtn ? 
                    <div className="col-sm text-right my-auto">
                        <a
                        href="#"
                        role="button"
                        className="btn btn-info disabled"
                        >
                        Add to Cart
                        </a>
                    </div> : null
                    } */}
                </div>
              </div>
            </Card.Body>
          </Card>
          <div className="container">
            <h2 className="py-2">Discussions</h2>
            {(comments.length==0)?
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">No comment!</h1>
                <p class="lead">Be the first commenter.</p>
              </div>
            </div>
            :
            comments.map((comment)=>{
              return(
              <div className="media my-3">
                <img src={iconImage} width="54" class="mr-3" alt="..."></img>
                <div class="media-body">
                  <p>{comment.user.name}</p>
                  <p class="font-weight-bold my-0">{comment.comment}</p>
                </div>
              </div>
              )
            })
            }
          </div>
          <div class="container my-5">
            <h2 class="py-2">Post a comment</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="desc">Write here</label>
                    <input type="text" class="form-control" value={comment} onChange={(event)=>setComment(event.target.value)} id="comment" name="comment" required/>
                </div>
                {(isLoggedIn)?<button type="submit" class="btn btn-info">Comment</button>:''}
            </form>
            {(!isLoggedIn)?<>
            <button onClick={fn1} class="btn btn-info">Comment</button>
            <div id="hide" class="alert alert-warning" role="alert" style={{display:"none"}}>
              Login first!
            </div></>:''}
          </div>
        </>
      )}
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      onAddToCart: ({searchedMedicines,name,_id}) => {
          const medicineList=searchedMedicines.map((medicine)=>{
              return {...medicine,shop_id:_id,shopName:name,quantity:1};
          })
          dispatch({type: "ADD_ITEM_TO_CART", medicineList,});

      }
  }
};

export default connect(null, mapDispatchToProps)(withRouter(MedicineDetails));