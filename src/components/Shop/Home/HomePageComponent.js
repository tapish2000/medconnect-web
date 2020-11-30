import React from 'react';
import HomeImage from "./home.jpg"
import './HomePageComponent.css';

const HomePageComponent = () => {
    return (
        <>
            <div className="container-fluid homepage">


                <div className="row">
                    <div className="heading-HomePage">
                        <h1 style={{fontSize:"4vw"}}>MEDCONNECT</h1>
                        <p>For Shops</p>
                    </div>

                </div>



                <div className="row">
                    <div className="col-md-12">
                        <div class="pimg1">
                           
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="heading-2-HomePage">
                        <h1>OUR SERVICES</h1>
                    </div>
                </div>

                <div className="row m-5">
                    <div className="col-md-6 text-center my-auto">
                        <h3>Manage Inventory</h3>
                        <p>
                            Leave the traditional way of inventoroy mangament and move towards the new digital world of systematic management.
                            Keep a track of what is present in your shop through our very user friendly UI. Also we have got added benefits of 
                            updation and maintenace. 
                        </p>
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
                        <p>
                            The lifeline for any shop is through its sales and profits management. Experience a fully informative dashboard provided by
                            us to get a first hand visual info of all your instock and deadstock items so that you can always be safe on trades and invest
                            as per the market demand.
                        </p>
                    </div>
                </div>

                <div className="row m-5">
                    <div className="col-md-6 text-center my-auto">
                        <h3>Booking Receipt</h3>
                        <p>We know that managing reciepts are tough. But we have got it covered for you completely. A fully proficient and rich user experience
                            for letting you completely see all the ongoing bookings and even approve of these bookings.
                        </p>
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