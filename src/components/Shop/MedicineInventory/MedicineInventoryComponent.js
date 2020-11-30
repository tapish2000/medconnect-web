import React, { useState } from 'react';
import {Data} from './Data';
import Image from './img.png';
import axios from 'axios';
import Loading from '../../Customer/Loading/Loading'
import { reactLocalStorage } from 'reactjs-localstorage';

function MedicineInventory() {

    const [loading, setLoading] = useState(false);

    const addToInventory = () => {
        var med_name = document.getElementById("med_name");
        var qty = document.getElementById("qty");
        var mfg_date = document.getElementById("mfg_date");
        var add_date = document.getElementById("addition_date");
        var wholesale_price = document.getElementById("wholesale");
        const shopId = reactLocalStorage.get('id');

        var params = {
            med_name: med_name.value,
            qty: qty.value,
            mfg_date: mfg_date.value,
            add_date: add_date.value,
            wholesale_price: parseFloat(wholesale_price.value)
        }
        console.log(params);
        axios({
            method: "post",
            url: "https://glacial-caverns-39108.herokuapp.com/shop/inventory/" + shopId,
            data: params
        })
        .then(function (response) {
            console.log(response.data);
            // setAddedMedicine(response.data);
            setLoading(true);
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>  
        <Loading show={loading} />
        <form style={{paddingLeft:"75px"}}>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-md-5">

                        <div className="card">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col">
                                        <center>
                                            <h4>Medicine Details</h4>
                                        </center>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <center>
                                            <img id="imgs" src={Image} width="98%" height="30%" />
                                        </center>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col">
                                        <label for="">Medicine Name</label>
                                        <div className="form-group">
                                            <input id="med_name" type="text" className="form-control" placeholder="Medicine Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Quantity</label>
                                        <div className="form-group">
                                            <input id="qty" type="number" className="form-control" placeholder="Quantity" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Wholesale Price</label>
                                        <div className="form-group">
                                            <input id="wholesale" type="number" className="form-control" placeholder="Wholesale Price" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label for="">Addition Date</label>
                                        <div className="form-group">
                                            <input id="addition_date" name="addition_date" type="date" className="form-control" placeholder="Publisher Date" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="">Manufacturing Date</label>
                                        <div className="form-group">
                                            <input id="mfg_date" name="mfg_date" type="date" className="form-control" placeholder="Publisher Date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <input name="role" type="button" className="btn btn-success btn-block btn-lg" value="Add Medicine" onClick={addToInventory} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col">
                                        <center>
                                            <h4>Medicine Inventory</h4>
                                        </center>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col">
                                        <Data />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    )
}

export default MedicineInventory;