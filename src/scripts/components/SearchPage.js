var React = require('react')
import Search from './Search'
import SearchResults from './SearchResults'
import $ from 'jquery'

var SearchPage = React.createClass({
  // shouldComponentUpdate: function(nextProps, nextState) {
  //   console.log(nextProps.params.searchTerm)
  //   console.log(this.props.params.searchTerm)
  //   console.log(nextProps.params.searchTerm !== this.props.params.searchTerm)
  //   return nextProps.params.searchTerm !== this.props.params.searchTerm
  // },
  // componentWillReceiveProps: function(nextProps) {
  //   console.log(nextProps.params.searchTerm)
  // },
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
        <Search/>
        <SearchResults searchTerm={this.props.params.searchTerm} results={this.state.results}/>
      </div>
    )
  }
})

export default SearchPage