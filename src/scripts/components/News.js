const React = require('react')

const News = React.createClass({

  render: function() {
    return (
      <div className="news-story">
        <h2>This is the story title</h2>
        <p>blurb about story events and such...</p>
      </div>
    )
  }
})

export default News