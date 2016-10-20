import React from 'react'

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
    e.preventDefault()
    this.context.router.push('/search/' + this.state.searchTerm)
  },
  render: function() {
    return (
      <div>
        <form className="Search" onSubmit={this.handleSubmit}>
          <input className="searchBar" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
          <input className="searchBtn" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
})

export default Search
