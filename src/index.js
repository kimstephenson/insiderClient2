import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/app';
import Info from './scripts/components/Info';
import './css/index.css';
import { Router, Route, BrowserHistory } from 'react-router'

ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route path="/" component={App}/>
    <Route path="/companies" component={Info}/>
  </Router>
  ), document.getElementById('root'))

