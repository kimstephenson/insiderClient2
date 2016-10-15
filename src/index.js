import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/app';
import CompanyHeader from './scripts/components/CompanyHeader';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/companies/:companyName" component={CompanyHeader}/>
  </Router>
  ), document.getElementById('root'))

