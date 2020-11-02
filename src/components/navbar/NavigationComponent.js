import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner'; 
import Search from '../Search/SearchComponent';
import './NavigationComponent.css';
import * as FaIcons from 'react-icons/fa';
import iconImage from "./logo.png"
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

const Navigation =(props)=> {
	
	useEffect(()=>{
		props.getCartAmount();
	},[])

		return (
			<Navbar collapseOnSelect sticky="top" bg="info" variant="dark" expand="lg">
				<Navbar.Brand href="/">
					<img src={iconImage} alt="" width="30" height="30" className="d-inline-block align-top" style={{backgroundColor:"white"}} />
					<h6>MedConnect</h6>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/stores">Stores</Nav.Link>
						<NavDropdown title="Allopathic Products" id="basic-nav-dropdown">
							<NavDropdown.Item href="/allopgen">Generic</NavDropdown.Item>
							<NavDropdown.Item href="/allopbrand">Branded</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Ayurvedic Products" id="basic-nav-dropdown">
							<NavDropdown.Item href="/ayurgen">Generic</NavDropdown.Item>
							<NavDropdown.Item href="/ayurbrand">Branded</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					
					<Search/>
					<Nav.Link as={Link} to={"/cart"}>
						{(props.loading)?
							(<div className="SpinnerDiv">
								<Spinner
									animation="border"
									variant="light"
									style={{ margin: 'auto' }}
								/>
							</div>):
							<>
							<h6 className="cartHeading">{props.cartAmount}</h6>
							<IconContext.Provider value={{ style: { verticalAlign: 'middle',color:"white",height:'30px',width:'30px' } }}>
								<FaIcons.FaCartPlus />
                            </IconContext.Provider>
							
						</>}
					</Nav.Link>

                    <Nav>
                    <Dropdown>
                         <Dropdown.Toggle variant="none" id="dropdown-basic" >
                         <h3><IconContext.Provider value={{ color: "white"}}>
                           <FaIcons.FaUserCircle />
                        </IconContext.Provider></h3>
                         </Dropdown.Toggle>

                        <Dropdown.Menu className="dm">
                            <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>
                            <Dropdown.Item href="/current">Current Bookings</Dropdown.Item>
                            <Dropdown.Item href="/history">Booking History</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

const mapStateToProps = state => {
    return {
		cartAmount: state.cartAmount,
		loading:state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCartAmount: () => {
            dispatch({type: "GET_CART_AMOUNT",});

        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);