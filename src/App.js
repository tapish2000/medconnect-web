import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/HomePageComponent';
import Navigation from './components/NavigationComponent';
import Footer from './components/footer/FooterComponent';
import AllopathicBranded from './components/AllopathicBranded/AllopathicBrandedComponent';
import AllopathicGeneric from './components/AllopathicGeneric/AllopathicGenericComponent';
import AyurvedicBranded from './components/AyurvedaBranded/AyurvedaBrandedComponent';
import AyurvedicGeneric from './components/AyurvedaGeneric/AyurvedaGenericComponent';
import MedicineCardDetailsComponent from './components/cards/MedicineCardDetailsComponent';

import MapBox from './components/mapBox/mapBox';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allopbrand" component={AllopathicBranded} />
          <Route exact path="/allopgen" component={AllopathicGeneric} />
          <Route exact path="/ayurbrand" component={AyurvedicBranded} />
          <Route exact path="/ayurgen" component={AyurvedicGeneric} />
          <Route path="/medicinedetails">
            <MedicineCardDetailsComponent  imgsrc = "https://picsum.photos/200/300"/>
          </Route>
          <Route exact path="/stores">
            <MapBox currentLocationOfUser = "just testing but will be changed later as soon as we add feature of allowing access to user's current location on opening of website"/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
