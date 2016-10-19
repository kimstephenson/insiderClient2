var React = require('react');
import '../../../css/app.css'
import Header from './Header'
import AppInfo from './Info'
import HeatMap from './HeatMap'
import Search from '../SearchComponents/Search'
import MainChart from './MainChart'

var App = React.createClass({
  render: function() {
    return(
      <div className="App">
        <Header/>
        <AppInfo/>
        <HeatMap/>
        <MainChart/>
        <Search/>
      </div>
    )
  }
})

export default App