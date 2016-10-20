var React = require('react')
import '../../../css/infobar.scss'

function convertTotalTrans(totalTrans) {
  totalTrans = Math.floor(parseInt(totalTrans))
  if((Math.abs(totalTrans)) >= 1000000000) {
    return ((totalTrans/1000000000).toFixed(1)).toString() + "B"
  } else if((Math.abs(totalTrans)) >= 1000000) {
    return ((totalTrans/1000000).toFixed(1)).toString() + "M"
  } else if((Math.abs(totalTrans)) >= 1000) {
    return ((totalTrans/1000).toFixed(1)).toString() + "K"
  } else {
    return totalTrans.toString()
  }
}

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
          <h2 className="number">${convertTotalTrans(this.props.totalTrans)}</h2>
          <p className="mustache-header">Total Traded This Quarter</p>
        </div>
      </div>
    )
  }
})

export default InfoBar