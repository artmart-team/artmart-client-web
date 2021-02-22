import React from 'react';

import {
  ArtistPage,
  ArtistEditProfile,
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
        <Route exact path={path.stallForm}>
          <StallAdd />
        </Route>
        <Route exact path={path.artistEditProfile}>
          <ArtistEditProfile />
        </Route>
        <Route exact path={path.artistPage}>
          <ArtistPage />
        </Route>
        <Route exact path={path.userEditProfile}>
          <h1>USER EDIT</h1>
        </Route>
        <Route exact path={path.userPage}>
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
        <Route exact path={path.artistPortfolio}>
          <ArtistPortfolio />
        </Route>
        <Route exact path={path.loginArtist}>
          <Login />
        </Route>
        <Route exact path={path.loginCustomer}>
          <Login />
        </Route>
        <Route exact path={path.registerArtist}>
          <RegisterArtist />
        </Route>
        <Route exact path={path.registerCustomer}>
          <RegisterCustomer />
        </Route>
        <Route exact path={path.home}>
          <Home />
        </Route>
        <Route path="*" >
          <h1>NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
