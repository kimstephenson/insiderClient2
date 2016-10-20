var React = require('react')
import '../../../css/Header.css'

var InfoBar = React.createClass({
  render: function(){
  console.log("company details:")
  console.log(this.props)
    return (
      <div className="info-bar">
        <div>
          <h2></h2>
          <p>Confidence Rating</p>
        </div>
        <div>
          <h2>4</h2>
          <p>Insiders</p>
        </div>
        <div>
          <h2>$15</h2>
          <p>Total Traded This Quarter</p>
        </div>
      </div>
    )
  }
})

export default InfoBar