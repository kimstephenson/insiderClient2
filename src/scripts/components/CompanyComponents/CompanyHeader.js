var React = require('react')
import '../../../css/CompanyHeader.css'

var CompanyHeader = React.createClass({
  render: function() {
    return(<h1 className="CompanyHeader">
    {this.props.companyName.replace(/\b[a-z]/g,
      function(f) {
        return f.toUpperCase()
      })}</h1>
    )
  }
})

export default CompanyHeader