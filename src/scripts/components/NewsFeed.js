const React = require('react')
import News from './News'

const NewsFeed = React.createClass({
  // 
  render: function() {
    return(
      <div className="news-feed">
        <h1>{this.props.companyName} News Feed</h1>
        <News companyName={this.props.companyName} />
      </div>
    )
  }
})


export default NewsFeed
