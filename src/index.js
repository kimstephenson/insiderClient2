import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout'
import App from './scripts/components/HomepageComponents/app';
import CompanyShow from './scripts/components/CompanyComponents/CompanyShow';
import Search from './scripts/components/SearchComponents/Search'
import './css/index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
const { companies } = require('../public/data')

const Index = React.createClass({
  assignCompany (nextState, replace) {
    const companyArray = companies.filter((company) => company.name === nextState.params.companyName )

    if (companyArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, companyArray[0])
    return nextState
  },

  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={App}/>
          <Route path="/companies/:companyName" component={CompanyShow} onEnter={this.assignCompany} />
        </Route>
        <Route path="/search" component={Search} companies={companies} />
        <Route path="/search/:term" component={Search} />
      </Router>
    )
  }
})

ReactDOM.render(<Index />, document.getElementById('root'))