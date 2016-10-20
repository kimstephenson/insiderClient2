var React = require('react');
import '../../../css/app.css'
import Header from './Header'
import AppInfo from './AppInfo'
import Search from '../SearchComponents/Search'
import MainChart from './MainChart'


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
            <MainChart/>
          </div>

          <div className="info">
            <AppInfo/>
          </div>
          
          <div className="footer">
          </div>

        </div>
      </div>
    )
  }
})

export default App