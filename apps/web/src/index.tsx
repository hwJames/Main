import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';

import { polyfill } from 'smoothscroll-polyfill';
polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
