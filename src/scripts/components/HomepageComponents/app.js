var React = require('react');
import '../../../css/app.css'
import Header from './Header'
import AppInfo from './AppInfo'
import SearchBar from '../SearchComponents/SearchBar'
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
            <SearchBar/>
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