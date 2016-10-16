var React = require('react')
import $ from 'jquery'

var CompanyData = React.createClass({
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/forms",
      dataType: "json",
      success: function(data) {
        console.log(data)
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return(
      <p>{this.state.data}</p>
    )
  }
})

export default CompanyData