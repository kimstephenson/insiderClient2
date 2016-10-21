import React from 'react';
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router'
import Layout from './Layout'
import App from './scripts/components/HomepageComponents/app';
import CompanyShow from './scripts/components/CompanyComponents/CompanyShow';
import Search from './scripts/components/SearchComponents/Search'
import './css/index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
const { companies } = require('../public/companies')
const { insiders } = require('../public/insiders')
const { store } = require('./Store')
const { Provider } = require('react-redux')

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
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App} insiders={insiders} />
          <Route path="/companies/:companyName" component={CompanyShow} onEnter={this.assignCompany} />
          <Route path="/search" component={Search} companies={companies} />
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<Index />, document.getElementById('root'))