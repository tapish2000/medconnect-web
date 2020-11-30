import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import iconImage from './logo.png';
import { reactLocalStorage } from 'reactjs-localstorage';
import './Sidebar.css';

function Sidebar() {

	const [isLoggedIn,setisLoggedIn] = useState(reactLocalStorage.get('isLoggedIn'))

	function eventHandler(e){
		console.log("inside logout");
		// e.preventDefault();
		reactLocalStorage.set('isLoggedIn',"false");
		reactLocalStorage.set('id','');
		reactLocalStorage.set('email', '');
		reactLocalStorage.set('password', '');
		setisLoggedIn("false");
	}

	return (
		<div>
			<div id="sidebar" className="sidebar">
				<a href="#/shop">
					<img src={iconImage} alt="" width="30" height="30" className="logo" />
					<span className="company">MedConnect</span>
				</a>
				<a href="#/shop/dashboard">
						<MdIcons.MdDashboard className="material-icons" />
						<span class="icon-text">Dashboard</span>
				</a>
				<a href="#/shop/inventory">
					<FaIcons.FaBoxes className="material-icons" />
					<span class="icon-text">Inventory</span>
				</a>
				<a href="#/shop/CurrentBookings">
					<FaIcons.FaCashRegister className="material-icons" />
					<span class="icon-text">Current Bookings</span>
				</a>
				<a href="#/shop/BookingHistory">
					<FaIcons.FaHistory className="material-icons" />
					<span class="icon-text">Booking History</span>
				</a>
				
				<a href="#/shop/profile">
					<MdIcons.MdPerson className="material-icons" />
					<span class="icon-text">Profile</span>
				</a>
				<a href="#/login" onClick={eventHandler}>
					<IoIcons.IoIosLogOut className="material-icons" />
					<span class="icon-text">Log Out</span>
				</a>
			</div>
		</div>
	);
}

export default Sidebar;