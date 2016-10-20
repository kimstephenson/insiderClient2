import React from 'react'
<<<<<<< HEAD
import CompanyCard from './CompanyCard'
=======
>>>>>>> development

var SearchResults = React.createClass({
  render: function() {
    return (
<<<<<<< HEAD
      this.props.results.map(function(co) {
        return(
          <CompanyCard co={co} />
        )
      })
=======
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
>>>>>>> development
    )
  }
})

export default SearchResults