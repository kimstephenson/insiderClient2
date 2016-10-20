import React from 'react'
import CompanyCard from './CompanyCard'

var SearchResults = React.createClass({
  render: function() {
    return (
      this.props.results.map(function(co) {
        return(
          <CompanyCard co={co} />
        )
      })
    )
  }
})

export default SearchResults
