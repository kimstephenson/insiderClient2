var React = require('react')

var CompanyHeader = React.createClass({
  render: function() {
    return(<h2 className="CompanyHeader">{this.props.params.companyName}</h2>)
  }
})

export default CompanyHeader