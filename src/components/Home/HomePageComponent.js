import React, { Component } from 'react';
import Carousel from './HomeCarouselComponent';
import HomeBody from '../HomeBodyComponent/HomeBodyComponent';

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<HomeBody />
			</div>
		);
	}
}

export default Home;