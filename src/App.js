import React from 'react';
import Carousel from './components/HomeCarouselComponent';
import Navigation from './components/NavigationComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Carousel />
    </div>
  );
}

export default App;
