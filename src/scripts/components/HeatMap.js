var React = require('react')
import $ from 'jquery'

var HeatMap = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/companies",
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
      <ul className="HeatMap">
        {
          this.state.data.map(function(co) {
            return <li key={co.id}>{co.name}</li>
          })
        }
      </ul>
    )
  }
})

export default HeatMap