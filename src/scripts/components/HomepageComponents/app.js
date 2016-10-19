var React = require('react');
import '../../../css/app.css'
import Header from './Header'
import Info from './Info'
import HeatMap from './HeatMap'
import Search from '../SearchComponents/Search'


var App = React.createClass({
  render: function() {
    return(
      <div className="App">
        <div className="container">
          <div className="header">
            <Header/>
          </div>
          <div className="search">
            <Search/>
          </div>
          <div className="cluster-chart">
            <HeatMap/>
          </div>

          <div className="news">
            // <Info/>
          </div>
          <div className="transaction-list">

          </div>
          <div className="footer">

          </div>

        </div>
      </div>
    )
  }
})

export default App