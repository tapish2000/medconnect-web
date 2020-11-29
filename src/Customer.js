import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Customer/Home/HomePageComponent';

import Navigation from './components/Customer/navbar/NavigationComponent';
import Footer from './components/Customer/footer/FooterComponent';
import AllopathicBranded from './components/Customer/AllopathicBranded/AllopathicBrandedComponent';
import AllopathicGeneric from './components/Customer/AllopathicGeneric/AllopathicGenericComponent';
import AyurvedicBranded from './components/Customer/AyurvedaBranded/AyurvedaBrandedComponent';
import AyurvedicGeneric from './components/Customer/AyurvedaGeneric/AyurvedaGenericComponent';
import MedicineDetailComponent from './components/Customer/MedicineDetails/MedicineDetailComponent';
import ShowPage from './components/Customer/ShopsList/ShowPage';
import CurrentBooking from './components/Customer/bookings/CurrentBookingComponent';
import BookingHistory from './components/Customer/bookings/BookingHistoryComponent';
import Cart from './components/Customer/cart/CartComponent';
import MapBox from './components/Customer/mapBox/mapBox';
import DailyUseCardComponent from './components/Customer/cards/DailyUseCardComponent';
import Login from './components/Customer/accesories/login/LoginPage'
import CustomerSignUp from './components/Customer/accesories/SignUp/CustomerSignUp';
import BookingSuccessful from './components/Customer/BookingSuccessful/BookingSuccessful';
import CustomerProfile from './components/Customer/accesories/Profile/CustomerProfile';
import AboutUs from './components/accesories/AboutUs/AboutUs';

function Customer() {
  return (    
    <div> 
      <Navigation />
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allopbrand" component={AllopathicBranded} />
          <Route
            exact
            path="/medicine/:id"
            component={() => (
              <MedicineDetailComponent showBtn={false} imgsrc="https://picsum.photos/200/300" />
            )}
          />
          <Route exact path="/SuccessfulBooking" component={BookingSuccessful}/>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/allopgen" component={AllopathicGeneric} />
          <Route exact path="/ayurbrand" component={AyurvedicBranded} />
          <Route exact path="/ayurgen" component={AyurvedicGeneric} />
          
          <Route exact path="/current" component={CurrentBooking} />
          <Route exact path="/history" component={BookingHistory} />
          <Route exact path="/shoplist" component={ShowPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/signup" component={CustomerSignUp} />
          <Route exact path="/profile" component={CustomerProfile} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path = "/stores">
            <MapBox />
          </Route>

          <Route
            exact
            path="/:id"
            component={() => (
              <MedicineDetailComponent showBtn={false} imgsrc="https://picsum.photos/200/300" />
            )}
          />

        </Switch>
      
      <Footer />
    </div>
  );
}

export default Customer;
