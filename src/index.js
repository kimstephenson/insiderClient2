import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout'
import App from './scripts/components/HomepageComponents/app';
import CompanyShow from './scripts/components/CompanyComponents/CompanyShow';
import SearchPage from './scripts/components/SearchComponents/SearchPage'
import './css/index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={App}/>
        <Route path="/companies/:companyName" component={CompanyShow}/>
      </Route>
      <Route path="/search" component={SearchPage}/>
    </Router>
  ), document.getElementById('root'))

