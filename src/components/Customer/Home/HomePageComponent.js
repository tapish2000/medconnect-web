import React, { Component } from 'react';
import Carousel from './HomeCarouselComponent';
import HomeBodyComponent from '../HomeBodyComponent/HomeBodyComponent'

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<HomeBodyComponent />
			</div>
		);
	}
}

export default Home;