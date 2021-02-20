import React from 'react';

import {
  ArtistPortfolio,
  Home,
  Login,
  OrderDescribe,
  OrderFinish,
  OrderProcess,
  PaymentGateway,
  Register
} from './pages/index.js';

import { Switch, Route } from 'react-router-dom';

import path from './routers/index.js';
import { NavBar } from './components/layout/index.js';

const App = _ => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path={path.orderDescribe}>
          <OrderDescribe />
        </Route>
        <Route path={path.orderProcess}>
          <OrderProcess />
        </Route>
        <Route path={path.orderFinish}>
          <OrderFinish />
        </Route>
        <Route path={path.artistPortfolio}>
          <ArtistPortfolio />
        </Route>
        <Route path={path.login}>
          <Login />
        </Route>
        <Route path={path.register}>
          <Register />
        </Route>
        <Route path={path.paymentGateway}>
          <PaymentGateway />
        </Route>
        <Route path={path.home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
