import React, { useState, useEffect } from 'react';
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
  const [MedicineData, setMedicineData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoggedIn,setisLoggedIn] = useState(reactLocalStorage.get('isLoggedIn'));
  const [userID,setUserID] = useState(reactLocalStorage.get('id'));
  
  const fn1=()=>{
    document.getElementById("hide").style.display = "block";
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
                      <select className="form-control" id="quantity">
                        <option>Quantity: 1</option>
                        <option>Quantity: 2</option>
                        <option>Quantity: 3</option>
                        <option>Quantity: 5</option>
                        <option>Quantity: 10</option>
                      </select>
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
                  {props.showBtn ? 
                    <div className="col-sm text-right my-auto">
                        <a
                        href="#"
                        role="button"
                        className="btn btn-outline-primary"
                        >
                        Add to Cart
                        </a>
                    </div> : null
                    }
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

export default withRouter(MedicineDetails);
