import React from 'react';

import { Home, Login, Register, Detail  } from './pages/index.js';
import { Switch, Route } from 'react-router-dom';
import path from './routers/index.js';
import { NavBar } from './helpers/layout/index.js';

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
        <Route path={path.detail}>
            <Detail />
        </Route>
        <Route path={path.home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
