var React = require('react')
import '../../../css/Header.css'

var InfoBar = React.createClass({
  render: function(){
  console.log(this.props)
    return (
      <div>
        <div>Confidence Rating</div>
        <div>Insiders</div>
        <div>Total Traded This Quarter</div>
      </div>
    )
  }
})

export default InfoBar