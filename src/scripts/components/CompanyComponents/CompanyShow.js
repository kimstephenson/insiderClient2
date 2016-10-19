var React = require ('react')
import CompanyBubbleChart from './CompanyBubbleChart'
import CompanyHeader from './CompanyHeader'
import NewsFeed from './NewsFeed'

var CompanyShow = React.createClass({
  render: function() {
    return(
      <div>
          <CompanyHeader companyName={this.props.params.companyName}/>
          <CompanyBubbleChart/>

        <NewsFeed companyName={this.props.params.companyName}/>
      </div>
    )
  }
})

export default CompanyShow