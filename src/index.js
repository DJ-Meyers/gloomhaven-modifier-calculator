import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favicon from 'react-favicon';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url='./assets/images/icons/Effects/favicon.png' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);