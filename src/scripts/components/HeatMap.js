var React = require('react')
import $ from 'jquery'

var HeatMap = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com",
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
      <div className="HeatMap">
        <p>Our pretty graph will go here.</p>
      </div>
    )
  }
})

export default HeatMap