import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerSignUp = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const changeName = (event) => {
        setName(event.target.value);
    }

    const changePhone = (event) => {
        setPhone(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    console.log("customer setails",name,phone,email,password);
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        var body={
          name: name,
          phone: phone,
          email: email,
          password: password,
          isCustomer: "true"
        }
        let res = axios({
          method: 'post',
          url: 'https://glacial-caverns-39108.herokuapp.com/user/register',
          data: body
        })
        .then(function (response) {
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
            window.location.reload();
        });
      }

    return (
        <>  <form>
            <div class="container my-2">
                <div class="row">
                    <div class="col-md-6 mx-auto">
    
                        <div class="card">
                            <div class="card-body">
    
                                <div class="row">
                                    <div class="col">
                                        <center>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQySDC3NVfeTDWRRKkTqYIBKQ6X2KTB_i1g&usqp=CAU" width="100px" />
                                        </center>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col mt-3">
                                        <center>
                                            <h4>Customer Sign Up</h4>
                                        </center>
                                    </div>
                                </div>
    
                                <hr />
    
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Full Name</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Full Name" name="full_name" onChange={changeName} required />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Contact Number</label>
                                        <div class="form-group">
                                            <input type="number" class="form-control" placeholder="Contact Number" name="contact_no" onChange={changePhone} required />
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Email ID</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email ID" name="email_id" onChange={changeEmail} required />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Password</label>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" name="password" onChange={changePassword} required />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row mt-4">
                                    <div class="col">
                                        <div class="form-group">
                                            <a href="/" style={{textDecoration:"none"}}><button type="button" class="btn btn-success btn-block btn-lg" onClick={handleSubmit}>Sign Up</button></a>
                                        </div>
                                    </div>
                                </div>

                                <br />
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}

export default CustomerSignUp;