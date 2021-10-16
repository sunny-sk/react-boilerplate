import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';

render(
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
