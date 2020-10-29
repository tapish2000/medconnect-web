import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from './Search/SearchComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCart from './NavbarCart/NavbarCartComponent'

class Navigation extends Component {
	render() {
		return (
			<Navbar collapseOnSelect sticky="top" bg="primary" variant="dark" expand="lg">
				<Navbar.Brand href="#">
					<img src="./assets/logo.png" alt="" width="40" className="d-inline-block align-top" style={{backgroundColor:"white",margin:"10px"}} />
					MedConnect
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
						<Search/>
					</Nav>
					<Nav className="ml-auto">
						<Nav.Link href="#"><NavbarCart /></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;