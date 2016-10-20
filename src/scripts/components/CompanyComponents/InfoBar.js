var React = require('react')
import '../../../css/infobar.scss'

var InfoBar = React.createClass({
  render: function(){
    return (
      <div className="info-bar">
        <div className="info">
          <h2 className="number">{this.props.confidenceRating}</h2>
          <p className="mustache-header">Confidence Rating</p>
        </div>
        <div className="info">
          <h2 className="number">{this.props.insiders}</h2>
          <p className="mustache-header">Insiders</p>
        </div>
        <div className="info">
          <h2 className="number">{this.props.totalTrans}</h2>
          <p className="mustache-header">Total Traded This Quarter</p>
        </div>
      </div>
    )
  }
})

export default InfoBar