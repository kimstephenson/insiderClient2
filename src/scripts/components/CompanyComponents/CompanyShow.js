var React = require ('react')
import CompanyBubbleChart from './CompanyBubbleChart'
import CompanyHeader from './CompanyHeader'
import NewsFeed from './NewsFeed'
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
        this.setState({data: data, companyName: data[0].name, buys: data[1], sells: data[2]})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return(
      <div className="companyShow">
        <CompanyHeader companyName={this.state.companyName}/>
        <CompanyBubbleChart buys={this.state.buys} sells={this.state.sells}/>
        <NewsFeed companyName={this.props.params.companyName} />
      </div>
    )
  }
})

export default CompanyShow