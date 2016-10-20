var React = require('react')
import '../../../css/stats.css'

var Stats = React.createClass({
  render: function() {
    <div className="stats">

      <div className="stat">
        <div className="number">6.5</div>
        <div className="mustache-header">Confidence Rating</div>
      </div>

      <div className="stat">
        <div className="number">8</div>
        <div className="mustache-header">Insiders</div>
      </div>

      <div className="stat">
        <div className="number">$1.2B</div>
        <div className="mustache-header">Total Traded this Quarter</div>
      </div>

    </div>

    )
  }
})
export default Stats