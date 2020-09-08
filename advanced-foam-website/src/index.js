import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {
    BrowserRouter as Router
  } from 'react-router-dom';

ReactDOM.render(
    //<Router basename={'/reactTest'}>
    <Router basename={'/reactTest'}>
    <App />
    </Router>, 
    document.getElementById('root')
);
