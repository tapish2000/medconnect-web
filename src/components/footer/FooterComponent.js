import React, { Component } from 'react';
import './FooterComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram
  } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
	render() {
		return (
			<div className="main-footer bg-info">
				<div className="container-fluid text-light">
					<div className="d-flex justify-content-around">
						<div className="col-md-2"><h5>Quick Links</h5></div>
						<div className="col-md col-4">
							<div className="row">
								<div className="col-12"><a className="text-light" href="/">Home</a></div>
								<div className="col-12"><a className="text-light" href="/stores">Store</a></div>
							</div>
						</div>
						<div className="col-md col-4">
							<div className="row">
								<div className="col-12"><a className="text-light" href="/allopgen">Generic Allopathic Products</a></div>
								<div className="col-12"><a className="text-light" href="/allopbrand">Branded Allopathic Products</a></div>
							</div>
						</div>
						<div className="col-md col-4">
						<div className="row">
								<div className="col-12"><a className="text-light" href="/ayurgen">Generic Ayurvedic Products</a></div>
								<div className="col-12"><a className="text-light" href="/ayurbrand">Branded Ayurvedic Products</a></div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-around">
						<div className="social-container">
							<h5 className="text-white">Connect With Us</h5>
							<a href="#" className="facebook social">
								<FontAwesomeIcon icon={faFacebook} size="2x" />
							</a>
							<a href="#" className="twitter social">
								<FontAwesomeIcon icon={faTwitter} size="2x" />
							</a>
							<a href="#" className="instagram social">
								<FontAwesomeIcon icon={faInstagram} size="2x" />
							</a>
						</div>
						<div className="footer-bottom">
							<p className="text-xs-center">
								MedConnect &copy;{new Date().getFullYear()} - All Rights Reserved
							</p>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

export default Footer;