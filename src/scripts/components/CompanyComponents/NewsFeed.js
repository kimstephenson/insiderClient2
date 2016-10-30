const React = require('react')
import News from './News'

const NewsFeed = React.createClass({
  //
  render: function() {
    return(
      <div className="news-single-line-item">
        <div className="news-bg">

          <div className="news-header">
            <h2>{this.props.companyName.replace(/\b[a-z]/g,function(f){
                    return f.toUpperCase()
                  })} News
            </h2>
          </div>

          <div className="news">
            <News companyName={this.props.companyName} />
          </div>
        </div>

      </div>
    )
  }
})


export default NewsFeed

