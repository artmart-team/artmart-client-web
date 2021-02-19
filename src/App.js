import React from 'react';
import { Home, Login, Register } from './pages/index.js';
import { Switch, Route } from 'react-router-dom';

import path from './routers/index.js';

const App = _ => {
  return (
    <div className="App">

      <Switch>
        <Route path={path.login}>
          <Login />
        </Route>
        <Route path={path.register}>
          <Register />
        </Route>
        <Route path={path.home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
