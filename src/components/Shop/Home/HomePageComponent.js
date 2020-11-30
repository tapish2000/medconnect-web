import React from 'react';
import './HomePageComponent.css';

const HomePageComponent = () => {
    return (
        <>
            <div className="container-fluid homepage">


                <div className="row">
                    <div className="col-md-12 text-center text-muted bg-dark p-2">
                        <h1>MedConnect for ShopOwners</h1>
                    </div>

                </div>



                <div className="row">
                    <div className="col-md-12">
                        <div class="pimg1">

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center text-muted bg-dark p-1">
                        <h1>Why to join us</h1>
                    </div>
                </div>

                <div className="row m-5">
                    <div className="col-md-6 text-center my-auto">
                        <h3>manage Inventory</h3>
                        <p>Leave the traditional way of manage inventory. The goal of inventory management systems is to
                        know where your inventory is at any given time and how much of it you have in order to manage
                           inventory levels correctly.</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="rounded-circle" src="https://www.elite-bam.com/images/services/IM_1.png" width="250" height="200" alt="inventory" />
                    </div>
                </div>

                <div className="row m-5">
                    <div className="col-md-6 text-center">
                        <img className="rounded-circle" src="https://sellerlegend.com/wp-content/uploads/2020/02/Inventory-Management-With-SellerLegend.png" width="250" height="200" alt="sales-and-profit" />
                    </div>
                    <div className="col-md-6 text-center my-auto">
                        <h3>Sales and Profit</h3>
                        <p>Leave the traditional way of manage inventory. The goal of inventory management systems is to
                        know where your inventory is at any given time and how much of it you have in order to manage
                           inventory levels correctly.</p>
                    </div>
                </div>

                <div className="row m-5">
                    <div className="col-md-6 text-center my-auto">
                        <h3>Booking Receipt</h3>
                        <p>Leave the traditional way of manage inventory. The goal of inventory management systems is to
                        know where your inventory is at any given time and how much of it you have in order to manage
                           inventory levels correctly.</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="rounded-circle" src="https://media.istockphoto.com/vectors/ticket-booking-office-linear-icon-sign-symbol-vector-on-isolated-vector-id866543798?k=6&m=866543798&s=170667a&w=0&h=ENOeVTm_cik9snUlisFqZawT0rbFvjVXY8sVRPZhLk4=" width="250" height="200" alt="booking-receipt" />
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col">
                        <center>
                            Become a member of MedConnect create your MedConnect account <a href="/medconnect-web#/shop/signup">here</a>
                            <br />
                            Already have an account? <a href="/medconnect-web#/login">login</a>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
}


export default HomePageComponent;