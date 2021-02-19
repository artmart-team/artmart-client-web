import React from 'react';
import { Home } from './pages/index.js';
import { Switch, Route } from 'react-router-dom';

import path from './routers/index.js';

import './styles/App.css';

const App = _ => {
  return (
    <div className="App">

      <Switch>
        <Route path={path.home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
