var React = require('react')

var AppInfo = React.createClass({
  render: function() {
    return(
      <div className="Info">
        <div>Insider Transactions this month</div>
        <div>Shares Traded this month</div>
      </div>
    )
  }
})

export default AppInfo