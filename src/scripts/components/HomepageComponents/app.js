var React = require('react');
import '../../../css/app.css'
import Header from './Header'
import Info from './Info'
import HeatMap from './HeatMap'
import Search from '../SearchComponents/Search'
import MainChart from './MainChart'

var App = React.createClass({
  render: function() {
    return(
      <div className="App">
        <Header/>
        <Info/>
        <HeatMap/>
        <MainChart/>
        <Search/>
      </div>
    )
  }
})

export default App