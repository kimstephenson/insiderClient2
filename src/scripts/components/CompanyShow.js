var React = require ('react')
import CompanyHeader from './CompanyHeader'
import CompanyData from './CompanyData'

var CompanyShow = React.createClass({
  render: function() {
    return(
      <div className="companyShow">
        <CompanyHeader companyName={this.props.params.companyName}/>
        <CompanyData/>
      </div>
    )
  }
})

export default CompanyShow