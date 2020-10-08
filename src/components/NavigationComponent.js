import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
	render() {
		return (
			<Navbar collapseOnSelect sticky="top" bg="primary" variant="dark" expand="lg">
				<Navbar.Brand href="#">
					<img src="" width="20" height="20" className="d-inline-block align-top" /> {' '}
					MedConnect
					</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#">Home</Nav.Link>
						<Nav.Link href="#map">Stores</Nav.Link>
						<NavDropdown title="Allopathic" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Generic</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Branded</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#map">Ayurvedic</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;