var React = require('react');
import '../../../css/app.css'
import Layout from '../../../Layout'
import AppInfo from './AppInfo'
import MainChart from './MainChart'
import TopInsiders from './TopInsiders'


var App = React.createClass({
  render: function() {
    return(
      <Layout>
          <div className="cluster-chart">
            <MainChart/>
          </div>
          <div className="info">
            <AppInfo/>
          </div>

          <div className="top-insiders">
            <TopInsiders/>
          </div>
          
          <div className="footer">
          </div>
      </Layout>
    )
  }
})

export default App