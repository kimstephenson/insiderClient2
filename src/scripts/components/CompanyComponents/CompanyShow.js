var React = require ('react')
import CompanyBubbleChart from './CompanyBubbleChart'
import CompanyHeader from './CompanyHeader'
import NewsFeed from './NewsFeed'
import InfoBar from './InfoBar'
import $ from 'jquery'

var CompanyShow = React.createClass({
  getInitialState: function() {
    return {companyName: "", data:[], sells: [], buys:[]}
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/companies/" + this.props.params.companyName,
      dataType: "json",
      success: function(data) {
        this.setState({data: data,
           confidenceRating: data[0].confidence_rating,
                 totalTrans: data[3].transactions_total,
                   insiders: data[3].insider_count,
                companyName: data[0].name,
                       buys: data[1],
                      sells: data[2]
                    })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return(
      <div>
        <div className="companyShow">
          <CompanyHeader companyName={this.state.companyName}/>
          <CompanyBubbleChart buys={this.state.buys} sells={this.state.sells}/>
          <InfoBar confidenceRating={this.state.confidenceRating} insiders={this.state.insiders} totalTrans={this.state.totalTrans}/>
          <NewsFeed companyName={this.props.params.companyName} />
        </div>
      </div>
    )
  }
})

export default CompanyShow