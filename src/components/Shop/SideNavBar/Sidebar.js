import React, { useEffect, useRef } from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import iconImage from './logo.png';
import './Sidebar.css';

function Sidebar() {

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
			</div>
		</div>
	);
}

export default Sidebar;