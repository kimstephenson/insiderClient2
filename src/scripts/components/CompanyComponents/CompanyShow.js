var React = require ('react')
import CompanyBubbleChart from './CompanyBubbleChart'
import CompanyHeader from './CompanyHeader'
import NewsFeed from './NewsFeed'
import InfoBar from './InfoBar'
import $ from 'jquery'
import Header from '../HomepageComponents/Header'

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
        <div className="header">
          <Header/>
        </div>

        <div className="companyShow">
          <CompanyHeader companyName={this.state.companyName}/>
          <CompanyBubbleChart buys={this.state.buys} sells={this.state.sells}/>
          <InfoBar company={this.state.data}/>
          <NewsFeed companyName={this.props.params.companyName} />
        </div>

      </div>
    )
  }
})

export default CompanyShow