import React from 'react';
import {Data} from './Data';

const MedicineInventory = () => {
    return (
        <>  <form>
            <div class="container-fluid mt-2">
                <div class="row" style={{marginLeft:"75px"}}>
                    <div class="col-md-5">

                        <div class="card">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <center>
                                            <h4>Medicine Details</h4>
                                        </center>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <center>
                                            <img id="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEPkPmuzKY59G6z5xgbLM2U3on2yXoGYRH5A&usqp=CAU" width="100px" />
                                        </center>
                                    </div>
                                </div>

                                <hr />

                                <div class="row">
                                    <div class="col">
                                        <label for="">Image Link:</label>
                                        <div class="form-group">
                                            <input id="img_link" name="img_link" type="text" class="form-control" placeholder="Image Link" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="">Medicine ID</label>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input id="med_id" name="med_id" type="text" class="form-control" placeholder="ID" />
                                                <input type="button" class="btn btn-primary" value="Go" onclick="fill_input()" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="">Medicine Name</label>
                                        <div class="form-group">
                                            <input id="med_name" name="med_name" type="text" class="form-control" placeholder="Medicine Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row">
                                            <div class="col">
                                                <label>Price (perunit)</label>
                                                <div class="form-group">
                                                    <input id="med_price" name="med_price" type="number" class="form-control" placeholder="Price(perunit)" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row">
                                            <div class="col">
                                                <label for="">Manufacturer</label>
                                                <div class="form-group">
                                                    <select name="manu_name" id="manu_name" class="form-control">

                                                        <option value="manu1">Manufacturer1</option>
                                                        <option value="manu2">Manufacturer2</option>
                                                        <option value="manu3">Manufacturer3</option>
                                                        <option value="manu3">Unknown</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="">Medicine Type</label>
                                        <div class="form-group">
                                            <select name="brand_name" id="brand_name" class="form-control">
                                                <option value="manu1">Branded</option>
                                                <option value="manu2">Generic</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="">Addition Date</label>
                                        <div class="form-group">
                                            <input id="addition_date" name="addition_date" type="date" class="form-control" placeholder="Publisher Date" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="">Manufacture Date</label>
                                        <div class="form-group">
                                            <input id="manu_date" name="manu_date" type="date" class="form-control" placeholder="Publisher Date" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="">Expiry Date</label>
                                        <div class="form-group">
                                            <input id="expi_date" name="expi_date" type="date" class="form-control" placeholder="Publisher Date" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="">Actual Stock</label>
                                        <div class="form-group">
                                            <input id="actual_stock" name="actual_stock" type="number" class="form-control" placeholder="Actual Stock" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="">Current Stock</label>
                                        <div class="form-group">
                                            <input id="current_stock" name="current_stock" type="number" class="form-control" placeholder="Current Stock" readonly="true" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="">Sold Stock</label>
                                        <div class="form-group">
                                            <input id="sold_med" name="sold_med" type="number" class="form-control" placeholder="Sold Stock" readonly="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <label for="">Medicine Description</label>
                                        <div class="form-group">
                                            <textarea class="form-control" name="med_description" id="med_description" cols="30" rows="2"
                                                placeholder="Medicine Description"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <input name="role" type="submit" class="btn btn-success btn-block btn-lg" value="Add" />
                                    </div>
                                    <div class="col-4">
                                        <input name="role" type="submit" class="btn btn-warning btn-block btn-lg" value="Update" />
                                    </div>
                                    <div class="col-4">
                                        <input name="role" type="submit" class="btn btn-danger btn-block btn-lg" value="Delete" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7">
                        <div class="card">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <center>
                                            <h4>Medicine Inventory</h4>
                                        </center>
                                    </div>
                                </div>

                                <hr />

                                <div class="row">
                                    <div class="col">
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