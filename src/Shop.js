import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavBar from './components/Shop/SideNavBar/Sidebar';
import MedicineInventory from './components/Shop/MedicineInventory/MedicineInventoryComponent';
import DashBoard from './components/Shop/DashBoard/DashBoardComponent'
import ShopSignUp from './components/Shop/SignUp/ShopSignUp';
import HomePageComponent from './components/Shop/Home/HomePageComponent';
import Footer from './components/Shop/footer/FooterComponent'
import CurrentBookings from './components/Shop/CurrentBookings/CurrentBookings';
import ShopOwnerProfile from './components/Shop/Profile/ShopOwnerProfile';


function Shop() {
  return (    
    <div>
     
      <Switch>
          <Route exact path="/shop/inventory" component={()=>{
            return(
              <>
              <SideNavBar />
              <MedicineInventory/>
              </>
            )
            }} />
          <Route exact path="/shop/dashboard" component={()=>{
            return(
              <>
              <SideNavBar />
              <DashBoard/>
              </>
            )
            }} />
          <Route exact path="/shop/profile" component={()=>{
            return(
              <>
              <SideNavBar />
              <ShopOwnerProfile/>
              </>
            )
            }} />
          <Route exact path="/shop/signup" component={()=>{
            return(
              <>
             
              <ShopSignUp/>
              </>
            )
            }} />
          <Route exact path="/shop/CurrentBookings" component={()=>{
            return(
              <>
              <SideNavBar />
              <CurrentBookings/>
              </>
            )
            }} />
          <Route path="/shop" component={HomePageComponent} />
          
      </Switch>
      <Footer />
    </div>
  );
}

export default Shop;
