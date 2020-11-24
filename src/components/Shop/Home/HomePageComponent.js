import React from 'react';
import iconImage from "./logo.png"
import './HomePageComponent.css';

const HomePageComponent = () => {
    return (
        <>
            <div className="container-fluid">

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
                        <div className="row">
                            <div className="col-md-3">
                                <center>
                                    <img src={iconImage} alt="MedConnectLogo" height="200" />
                                </center>
                            </div>
                            <div class="col-md-9">
                                <div className="card">
                                    <div className="card-body">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci. Modi culpa hic eaque nesciunt quas iste neque! Voluptatem
                                            dignissimos dolorum corrupti natus, nesciunt inventore?
                                        </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci. Modi culpa hic eaque nesciunt quas iste neque! Voluptatem
                                            dignissimos dolorum corrupti natus, nesciunt inventore?
                                        </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci. Modi culpa hic eaque nesciunt quas iste neque! Voluptatem
                                            dignissimos dolorum corrupti natus, nesciunt inventore?
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
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci. Modi culpa hic eaque nesciunt quas iste neque! Voluptatem
                                            dignissimos dolorum corrupti natus, nesciunt inventore?
                                        </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci. Modi culpa hic eaque nesciunt quas iste neque! Voluptatem
                                            dignissimos dolorum corrupti natus, nesciunt inventore?
                                        </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dignissimos provident
                                            dolorum ratione quisquam adipisci. Modi culpa hic eaque nesciunt quas iste neque! Voluptatem
                                            dignissimos dolorum corrupti natus, nesciunt inventore?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="login">
                                    <div className="row text-center">
                                        <div className="col">
                                            <h1>Login</h1>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row text-center">
                                        <div className="col">
                                            <form action="login.php" method="POST">
                                                <input type="text" name="email" placeholder="Email" required />
                                                <br /><br />
                                                <input type="password" name="password" placeholder="Password" required />
                                                <br /><br />
                                                <input type="submit" value="Login" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="pimg1">

                        </div>

                        <div className="row">
                            <div className="col">
                                <center>
                                    Become a member of MedConnect create your MedConnect account <a href="#">here</a>
                                </center>
                            </div>
                        </div>


                    </div>
                </div>



            </div>
        </>
    );
}

export default HomePageComponent;