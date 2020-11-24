import React, {Component} from 'react';
import {Tbl} from './Tbl';
import MedicineList from './MedicineList';

export class Data extends Component {
    render(){

        var datalist = MedicineList.map((val) => {
            var d_id=val.sn;
            var d_row=`<div class="container-fluid">
            <div class="row">
                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-12">
                            <h5>${val.med_name}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label>Price - $ ${val.price}</label>
                            <label> | Manufacturer - ${val.manufacturer}</label>
                            <label> | Type - ${val.type}</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label>Added - ${val.add_date}</label>
                            <label> | Manufactured - ${val.manu_date}</label>
                            <label> | Expired - ${val.expi_date}</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label>Actual Stock - ${val.ac_stock}</label>
                            <label> | Currrent Stock - ${val.curr_stock}</label>
                            <label> | Sold Stock - ${val.sold_stock}</label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <img class="img-fluid" src=${val.img_src} />
                </div>
            </div>
        </div>`;

        return [d_id, d_row];
        
        })

        return(
            <>
                <Tbl data={datalist}></Tbl>
            </>
        );
    }
}