import React from 'react';
import { Home, Login, Register, ArtistPortfolio, PaymentGateway } from './pages/index.js';
import { Switch, Route } from 'react-router-dom';

import path from './routers/index.js';
import { NavBar } from './components/layout/index.js';

const App = _ => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
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
