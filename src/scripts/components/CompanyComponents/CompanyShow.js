var React = require ('react')
import CompanyBubbleChart from './CompanyBubbleChart'
import CompanyHeader from './CompanyHeader'
import NewsFeed from './NewsFeed'

var CompanyShow = React.createClass({
  render: function() {
    return(
      <div className="companyShow">
        <CompanyHeader companyName={this.props.params.companyName}/>
        <CompanyBubbleChart/>
        <div className="news">
          <NewsFeed companyName={this.props.params.companyName} />
        </div>
      </div>
    )
  }
})

export default CompanyShow