import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerProfile = () => {
    //read-only section open
    const [readonly,SetReadOnly] = useState(true);

    const ChangeReadOnly = () => {
        SetReadOnly(false);
    }
    //read-only section close

    //show profile section open
    const [profile, SetProfile] = useState([]);

    useEffect(() => {
        axios
        .get('https://glacial-caverns-39108.herokuapp.com/user/5fba5b1e637eb10017b4e295')
        .then((response) => {
            SetProfile(response.data.data[0]);
            console.log("tere bhai ki profile dekhle abhi - ", response.data.data[0]);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    //show profile section close


    //profile update section open
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const changeName = (event) => {
        setName(event.target.value);
    }

    const changePhone = (event) => {
        setPhone(event.target.value);
    }

    console.log("aaaaaaaaaaaa",name,phone);
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        var body={
          name: name,
          phone: phone,
          isCustomer: "true"
        }
        axios({
          method: 'post',
          url: 'https://glacial-caverns-39108.herokuapp.com/user/profile/update/5fba5b1e637eb10017b4e295',
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
    //profile update section close

    return (
        <>  <form onSubmit={handleSubmit}>
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
    
                                <div class="row">
                                    <div class="col mt-2">
                                        <center>
                                            <h4>Customer</h4>
                                        </center>
                                        <b>{profile.email_id}</b>
                                    </div>
                                </div>

                                <hr />
    
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Name</label>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder={profile.name} value={name} name="name" onChange={changeName} readOnly={readonly} required/>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Contact Number</label>
                                        <div class="form-group">
                                            <input type="number" class="form-control" placeholder={profile.phone} value={phone} name="contact_no" onChange={changePhone} readOnly={readonly} required/>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row mt-3">
                                    <div class="col-6">
                                        <input name="role" onClick={ChangeReadOnly} class="btn btn-success btn-block btn-lg" value="Edit" />
                                    </div>
                                    <div class="col-6">
                                        <input name="role" type="submit" class="btn btn-warning btn-block btn-lg" value="Update" />
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

export default CustomerProfile;