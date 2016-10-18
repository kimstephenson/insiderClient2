var React = require('react')
import Search from './Search'
import SearchResults from './SearchResults'

var SearchPage = React.createClass({
  render: function() {
    return(
      <div className="SearchPage">
        <Search/>
        <SearchResults searchTerm={this.props.params.searchTerm}/>
      </div>
    )
  }
})

export default SearchPage