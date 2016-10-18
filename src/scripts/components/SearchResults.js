import React from 'react'
import $ from 'jquery'

var SearchResults = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/companies?search=" + this.props.searchTerm,
      dataType: "json",
      success: function(data) {
        this.setState({data: data})
        console.log(data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return (
      <div>
        {this.state.data.map(function(co) {
          return (
            <div id={co.id}>
              <a href={`/companies/${co.id}`}>{co.name}</a>
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