import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavBar from './components/Shop/SideNavBar/Sidebar';
import MedicineInventory from './components/Shop/MedicineInventory/MedicineInventoryComponent';
import Footer from './components/Shop/footer/FooterComponent'

function Shop() {
  return (    
    <div>
      <SideNavBar />
      <Switch>
          <Route path="/shop/inventory" component={MedicineInventory} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Shop;
