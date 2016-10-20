var React = require('react')
import '../../../css/infobar.scss'

var InfoBar = React.createClass({
  render: function(){
  console.log("company details:")
  console.log(this.props)
    return (
      <div className="info-bar-bg">
        <div className="info-bar">
          <div className="info">
            <h2 className="number">3052</h2>
            <p className="mustache-header">Insider Trades</p>
          </div>
          <div className="info">
            <h2 className="number">120M</h2>
            <p className="mustache-header">Shares Traded</p>
          </div>
          <div className="info">
            <h2 className="number">$12.14B</h2>
            <p className="mustache-header">Value Traded</p>
          </div>
        </div>
      </div>
    )
  }
})

export default InfoBar