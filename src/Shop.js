import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavBar from './components/Shop/SideNavBar/Sidebar';
import MedicineInventory from './components/Shop/MedicineInventory/MedicineInventoryComponent';

function Shop() {
  return (    
    <div>
      <SideNavBar />
      <Switch>
          <Route path="/shop/inventory" component={MedicineInventory} />
      </Switch>
    </div>
  );
}

export default Shop;
