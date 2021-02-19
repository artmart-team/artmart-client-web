// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Component or Import from file
import App from './App';
import store from './utils/store/index.js';

// Styling - Bootstrap
import 'bootstrap';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styling - Custom
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
