import React from 'react'

var SearchResults = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.results.map(function(co) {
          return (
            <div key={co.id}>
              <a href={`/companies/${co.name}`}>{co.name}</a>
              <p>Total insiders: {co.insiders}</p>
              <p>Monthly Transactions: {co.monthly_total}</p>
            </div>
          )
        })
      }
      </div>
    )
  }
})

export default SearchResults