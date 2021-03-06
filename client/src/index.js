import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import './index.css';
import AppRoot from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 

AOS.init();

ReactDOM.render(
  <BrowserRouter>
    <AppRoot />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
