var React = require('react')

var CompanyHeader = React.createClass({
  render: function() {
    return(<h1 className="CompanyHeader">{this.props.companyName.replace(/\b[a-z]/g,function(f){
                return f.toUpperCase()
              })}</h1>)
  }
})

export default CompanyHeader