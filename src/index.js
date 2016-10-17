import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/app';
import CompanyShow from './scripts/components/CompanyShow';
import Search from './scripts/components/Search'
import './css/index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/companies/:companyName" component={CompanyShow}/>
      <Route path="/search" component={Search}/>
    </Router>
  ), document.getElementById('root'))

