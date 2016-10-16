var React = require('react')
import $ from 'jquery'

var CompanyData = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/forms",
      dataType: "json",
      success: function(data) {
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return(
      <ul className="TestList">
      {
        this.state.data.map(function(form) {
        return <li key={form.id}>{form.insider_id}</li>
        })
      }
      </ul>
    )
  }
})

export default CompanyData