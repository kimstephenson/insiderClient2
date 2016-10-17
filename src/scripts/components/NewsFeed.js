const React = require('react')
import News from './News'

const NewsFeed = React.createClass({
  // 
  render: function() {
    return(
      <div className="news-feed">
        <h1>We're talking about {this.props.companyName} here...</h1>
        <News />
      </div>
    )
  }
})


export default NewsFeed
