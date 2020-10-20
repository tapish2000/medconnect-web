import React from 'react';
import Carousel from './components/HomeCarouselComponent';
import Navigation from './components/NavigationComponent';
import Footer from './components/footer/FooterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
