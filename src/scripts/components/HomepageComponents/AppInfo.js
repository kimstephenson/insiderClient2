var React = require('react')
import '../../../css/infobar.scss'

<<<<<<< HEAD
var InfoBar = React.createClass({
  render: function(){
  console.log("company details:")
  console.log(this.props)
    return (
      <div className="info-bar">
        <div className="info">
          <h2 className="number">6.5</h2>
          <p className="mustache-header">Confidence Rating</p>
        </div>
        <div className="info">
          <h2 className="number">8</h2>
          <p className="mustache-header">Insiders</p>
        </div>
        <div className="info">
          <h2 className="number">$1.2B</h2>
          <p className="mustache-header">Total Traded This Quarter</p>
        </div>
=======
var AppInfo = React.createClass({
  render: function() {
    return(
      <div className="Info">
        <div>Insider Transactions this month!!</div>
        <div>Shares Traded this month</div>
>>>>>>> development
      </div>
    )
  }
})

export default InfoBar