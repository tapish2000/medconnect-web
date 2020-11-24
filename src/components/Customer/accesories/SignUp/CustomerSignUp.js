import React from 'react';

const CustomerSignUp = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto">
    
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
                                    <div class="col">
                                        <center>
                                            <h4>Customer Sign Up</h4>
                                        </center>
                                    </div>
                                </div>
    
                                <hr />
    
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="">Full Name</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Full Name" name="full_name" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="">Date of Birth</label>
                                        <div class="form-group">
                                            <input type="date" class="form-control" placeholder="Date of Birth" name="dob" required />
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="">Contact Number</label>
                                        <div class="form-group">
                                            <input type="number" class="form-control" placeholder="Contact Number" name="contact_no" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="">Gender</label>
                                        <div class="form-group">
                                            <select name="author_name" id="author_name" class="form-control">
                                                <option value="manu1">Male</option>
                                                <option value="manu2">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="">State</label>
                                        <div class="form-group">
                                            <select name="state" id="" class="form-control">
                                                <option value="MP">MP</option>
                                                <option value="UP">UP</option>
                                                <option value="RJ">RP</option>
                                                <option value="UK">UP</option>
                                                <option value="BH">BH</option>
                                                <option value="JH">JH</option>
                                            </select>
                                        </div>
                                    </div>
    
                                    <div class="col-md-4">
                                        <label for="">City</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="City" name="city" required />
                                        </div>
                                    </div>
    
                                    <div class="col-md-4">
                                        <label for="">Pincode</label>
                                        <div class="form-group">
                                            <input type="number" class="form-control" placeholder="Pincode" name="pincode" required />
                                        </div>
                                    </div>
    
                                </div>
    
                                <div class="row">
                                    <div class="col">
                                        <label>Full Address</label>
                                        <div class="form-group">
                                            <textarea name="full_address" id="" cols="30" rows="2"
                                             class="form-control" placeholder="Full address" required></textarea>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col">
                                        <center>
                                            <span class="badge badge-pill badge-info">Login Credential</span>
                                        </center>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="">Email ID</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email ID" name="email_id" required />
                                        </div>
                                    </div>
    
                                    <div class="col-md-6">
                                        <label for="">Password</label>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" name="password" required />
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <input type="submit" class="btn btn-success btn-block btn-lg" value="Sign Up" />
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerSignUp;