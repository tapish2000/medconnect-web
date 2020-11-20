import React from 'react';

const MedicineInventoryCard = (props) => {
    return (
        <>
            <tr>
                <td>{props.sn}</td>
                <td>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="row">
                                    <div class="col-12">
                                        <h5>{props.med_name}</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label>Price - ${props.price}</label>
                                        <label> | Manufacturer - {props.manufacturer}</label>
                                        <label> | Type - {props.type}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label>Added - {props.add_date}</label>
                                        <label> | Manufactured - {props.manu_date}</label>
                                        <label> | Expired - {props.expi_date}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label>Actual Stock - {props.ac_stock}</label>
                                        <label> | Currrent Stock - {props.curr_stock}</label>
                                        <label> | Sold Stock - {props.sold_stock}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <img class="img-fluid" src={props.img_src} />
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default MedicineInventoryCard;