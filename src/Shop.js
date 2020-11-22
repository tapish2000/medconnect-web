import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavBar from './components/Shop/SideNavBar/Sidebar';
import MedicineInventory from './components/Shop/MedicineInventory/MedicineInventoryComponent';
import DashBoard from './components/Shop/DashBoard/DashBoardComponent';

function Shop() {
  return (    
    <div>
      <SideNavBar />
      <Switch>
          <Route exact path="/shop/dashboard" component={DashBoard} />
          <Route exact path="/shop/inventory" component={MedicineInventory} />
          {/* <Route exact path="/shop/dashboard" component={DashBoard} /> */}
      </Switch>
    </div>
  );
}

export default Shop;
