import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import history from './history.js';

render(
  <BrowserRouter history={history}>
    <ToastContainer />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
