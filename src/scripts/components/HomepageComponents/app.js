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
        <Header/>
        <AppInfo/>
        <Search/>
        <MainChart/>
      </div>
    )
  }
})

export default App