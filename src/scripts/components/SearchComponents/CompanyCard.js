import React from 'react'
import '../../../css/card.css'

var CompanyCard = React.createClass({
  render: function() {
    return (
      <div key={this.props.co.id} className="card">
        <a href={`/companies/${this.props.co.name}`}>{this.props.co.name}</a>
        <p className="card">Total insiders: {this.props.co.insiders}</p>
        <p>Monthly Transactions: {this.props.co.monthly_total}</p>
      </div>
    )
  }
})

export default CompanyCard
