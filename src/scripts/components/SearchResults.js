import React from 'react'

var SearchResults = React.createClass({

  render: function() {
    return (
      <div>
        <ul>{this.props.searchResults}</ul>
      </div>
    )
  }
})

export default SearchResults