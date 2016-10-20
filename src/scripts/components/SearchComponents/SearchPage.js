var React = require('react')
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import $ from 'jquery'

var SearchPage = React.createClass({
  getInitialState: function() {
    return{ results : [] }
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/companies?search=" + this.props.params.searchTerm,
      dataType: "json",
      success: function(results) {
        this.setState({results: results})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  componentWillReceiveProps: function(nextProps) {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/companies?search=" + nextProps.params.searchTerm,
      dataType: "json",
      success: function(results) {
        this.setState({results: results})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return(
      <div className="SearchPage">
        <SearchBar/>
        <SearchResults searchTerm={this.props.params.searchTerm} results={this.state.results}/>
      </div>
    )
  }
})

export default SearchPage