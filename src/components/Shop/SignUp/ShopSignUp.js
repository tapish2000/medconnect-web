import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopSignUp = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [license, setLicense] = useState("");


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

    const changeAddress = (event) => {
        setAddress(event.target.value);
    }

    const changeLicense = (event) => {
        setLicense(event.target.value);
    }

    console.log("shopowner details",name,phone,email,password,license);
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        var body={
          name: name,
          phone: phone,
          email: email,
          password: password,
          address: address,
          license: license,
          isCustomer: "false"
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
        console.log("shopowner information from server : ",res);
      }

    return (
        <>  <form>
            <div class="container mt-2">
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
    
                                <div class="row mt-3">
                                    <div class="col">
                                        <center>
                                            <h4>Shop Owner Sign Up</h4>
                                        </center>
                                    </div>
                                </div>

                                <hr />
    
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Shop Name</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Shop Name" name="shop_name" onChange={changeName} required />
                                        </div>
                                    </div>
                                    
                                </div>
    
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="">License</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="License" name="license" onChange={changeLicense} required />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="">Contact Number</label>
                                        <div class="form-group">
                                            <input type="number" class="form-control" placeholder="Contact Number" name="contact_no" onChange={changePhone} required />
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col">
                                        <label>Shop Address</label>
                                        <div class="form-group">
                                            <textarea name="full_address" id="" cols="30" rows="2"
                                             class="form-control" placeholder="Shop address" onChange={changeAddress} required></textarea>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="">Email ID</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email ID" name="member_id" onChange={changeEmail} required />
                                        </div>
                                    </div>
    
                                    <div class="col-md-6">
                                        <label for="">Password</label>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" name="password" onChange={changePassword} required />
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                        <a href="/shop" style={{textDecoration:"none"}}><button type="button" class="btn btn-success btn-block btn-lg" onClick={handleSubmit}>Sign Up</button></a>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}

export default ShopSignUp;