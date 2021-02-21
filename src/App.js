import React from 'react';

import {
  ArtistPage,
  ArtistPortfolio,
  Home,
  Login,
  OrderDescribe,
  OrderFinish,
  OrderProcess,
  OrderCheckout,
  RegisterCustomer,
  UserPage,
  StallAdd,
  RegisterArtist
} from './pages/index.js';

import { Switch, Route } from 'react-router-dom';

import path from './routers/index.js';
import { NavBar } from './components/layout/index.js';

const App = _ => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path={path.stallForm}>
          <StallAdd />
        </Route>
        <Route path={path.artistPage}>
          <ArtistPage />
        </Route>
        <Route path={path.userPage}>
          <UserPage />
        </Route>
        <Route path={path.orderFinish}>
          <OrderFinish />
        </Route>
        <Route path={path.orderProcess}>
          <OrderProcess />
        </Route>
        <Route path={path.orderCheckout}>
          <OrderCheckout />
        </Route>
        <Route path={path.orderDescribe}>
          <OrderDescribe />
        </Route>
        <Route path={path.artistPortfolio}>
          <ArtistPortfolio />
        </Route>
        <Route path={path.loginArtist}>
          <Login />
        </Route>
        <Route path={path.loginCustomer}>
          <Login />
        </Route>
        <Route path={path.registerArtist}>
          <RegisterArtist />
        </Route>
        <Route path={path.registerCustomer}>
          <RegisterCustomer />
        </Route>
        <Route path={path.home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
