import React from 'react';
import iconImage from "./logo.png"
import member from './member.png';
import Pharmatist from './pharmatist.jpg';
import Public from './public.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>  <div className="aboutus">
            <div className="container">
                <div className="card">
                    <div className="card-body">

                        <div className="row mt-3">
                            <div className="col-md-8 MyHeading2 mx-auto">
                                <center>
                                    <h2>MedConnect</h2>
                                </center>
                            </div>
                        </div>
                        <hr />
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <center>
                                    <img src={iconImage} alt="MedConnectLogo" height="200" />
                                </center>
                            </div>
                            <div class="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row mt-5">
                            <div className="col-md-8 mx-auto MyHeading2">
                                <center>
                                    <h2>Shop Owners</h2>
                                </center>
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-6 mt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <center>
                                    <img src={Pharmatist} alt="MedConnectLogo" height="300" />
                                </center>
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-md-8 mx-auto MyHeading2">
                                <center>
                                    <h2>Customers</h2>
                                </center>
                            </div>
                        </div>

                        <hr />

                        <div className="row mt-5">
                            <div className="col-md-6">
                                <center>
                                    <img src={Public} alt="MedConnectLogo" height="200" />
                                </center>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row mt-5">
                            <div className="col-md-8 mx-auto MyHeading2">
                                <center>
                                    <h2>Team MedConnect</h2>
                                </center>
                            </div>
                        </div>

                        <hr />

                        <div className="row mt-5">
                            <div className="col-md-4 text-center">
                                <center>
                                    <img src={member} alt="MedConnectLogo" width="150" height="150" />
                                </center>
                                <b>Chirag Gupta</b>
                            </div>
                            <div className="col-md-4 text-center">
                                <center>
                                    <img src={member} alt="MedConnectLogo" width="150" height="150" />
                                </center>
                                <b>Mir Sammed Ali</b>
                            </div>
                            <div className="col-md-4 text-center">
                                <center>
                                    <img src={member} alt="MedConnectLogo" width="150" height="150" />
                                </center>
                                <b>Rohit Shakya</b>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="mx-auto col-md-4 text-center">
                                <center>
                                    <img src={member} alt="MedConnectLogo" width="150" height="150" />
                                </center>
                                <b>Subhankar Bhadra</b>
                            </div>
                            <div className="mx-auto col-md-4 text-center">
                                <center>
                                    <img src={member} alt="MedConnectLogo" width="150" height="150" />
                                </center>
                                <b>Tapish Ojha</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default AboutUs;