import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Customer from './Customer';
import Shop from './Shop';

function App() {
  return (
    <HashRouter>
      <div className="App"> 
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/" component={Customer} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
