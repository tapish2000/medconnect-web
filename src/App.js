import React from 'react';
import Navigation from './components/NavigationComponent';
import Footer from './components/footer/FooterComponent';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import HomeComponent from './components/Home/HomeComponent'
import AllopathicBrandedComponent from './components/AllopathicBranded/AllopathicBrandedComponent'
import AllopathicGenericComponent from './components/AllopathicGeneric/AllopathicGenericComponent'
import AyurvedaBrandedComponent from './components/AyurvedaBranded/AyurvedaBrandedComponent'
import AyurvedaGenericComponent from './components/AyurvedaGeneric/AyurvedaGenericComponent'
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomeComponent}/>
        <Route path="/alopathic-branded" component={AllopathicBrandedComponent}/>
        <Route path="/alopathic-generic" component={AllopathicGenericComponent} />
        <Route path="/ayurvedic-branded" component={AyurvedaBrandedComponent}/>
        <Route path="/ayurvedic-generic" component={AyurvedaGenericComponent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
