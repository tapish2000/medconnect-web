import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from '../Search/SearchComponent';
import './NavigationComponent.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from "react-icons";

class Navigation extends Component {
	render() {
		return (
			<Navbar collapseOnSelect sticky="top" bg="info" variant="dark" expand="lg">
				<Navbar.Brand href="/">
					<img src="./assets/logo.png" alt="" width="30" height="30" className="d-inline-block align-top" style={{backgroundColor:"white"}} />
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
					<Nav.Link href="/cart">
						<>
							<h2 className="cartImg"><IconContext.Provider value={{ color: "white"}}>
								<FaIcons.FaCartPlus />
                            </IconContext.Provider></h2>
							<h6 className="cartHeading">0</h6>
							
						</>
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
}

export default Navigation;