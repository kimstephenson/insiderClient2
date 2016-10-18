import React from 'react'
import Request from 'superagent'
import _ from 'lodash'

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {searchTerm: ''}
  },
  handleSearchTermChange: function(e) {
    this.setState({searchTerm: e.target.value})
  },
  handleSubmit: function(e) {
    // console.log('handling submit')
    e.preventDefault()
    this.setState({
      searchTerm: this.state.searchTerm
    })
    // make call to backend API
    var url = `https://insiderapi.herokuapp.com/companies?search=${this.state.searchTerm}`
    Request.get(url).then((response) => {
      // get search information and save to state
      this.setState({
        searchResults: response.body
      })
    })
    // display search results
    this.context.router.push('/search/' + this.state.searchTerm)
  },
  render: function() {
    var searchResults = _.map(this.state.searchResults, (company) => {
      return (
        <li>
          <h2>
            <a href={`/companies/${company}`} >
            {company.name}</a>
          </h2>
          <h3>{company.insiders} Insiders</h3>
          <h3>{company.monthly_total} transacted this month</h3>
        </li>
      )
    })

    return (
      <div>
        <form className="Search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
          <input type="submit" value="Submit"/>
        </form>
        <ul>{searchResults}</ul>
      </div>
    )
  }
})

export default Search
