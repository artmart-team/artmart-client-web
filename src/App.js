import React from 'react';
import { Home } from './pages/index.js';
import { Detail } from './pages/index.js';
import { Switch, Route } from 'react-router-dom';
import path from './routers/index.js';
import { NavBar } from './helpers/layout/index.js';


const App = _ => {
  return (
    <>
      <NavBar/> 
        <Switch>
          <Route exact path={path.home}>
            <Home />
          </Route>
          <Route path={path.detail}>
            <Detail />
          </Route>
        </Switch>
    </>
  );
}

export default App;
