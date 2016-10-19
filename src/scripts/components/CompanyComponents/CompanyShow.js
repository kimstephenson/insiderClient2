var React = require ('react')
import CompanyBubbleChart from './CompanyBubbleChart'
import CompanyHeader from './CompanyHeader'
import NewsFeed from './NewsFeed'

var CompanyShow = React.createClass({
  getInitialState: function() {
    return {data:[]}
  },
  componentWillMount: function() {

  },
  render: function() {
    return(
      <div className="companyShow">
        <CompanyHeader companyName={this.props.params.companyName}/>
        <CompanyBubbleChart/>
        <NewsFeed companyName={this.props.params.companyName} />
      </div>
    )
  }
})

export default CompanyShow