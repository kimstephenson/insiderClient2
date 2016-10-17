import React from 'react'
import Request from 'superagent'
import _ from 'lodash'
import '../../css/news.css'

const News = React.createClass({
  getInitialState: function() {
      return { }
  },

  searchArticles: function(query = this.props.companyName) {
    var url = `https://webhose.io/search?token=dc880ca7-8a9b-4f5c-8f99-d246a8361ae5&format=json&q=thread.title%3A(${query})%20language%3A(english)%20site_category%3Afinance%20organization%3A%22${query}%22%20(site_type%3Anews%20OR%20site_type%3Ablogs)&ts=1476079876068`
    Request.get(url).then((response) => {
      this.setState({
        posts: response.body.posts.slice(0, 5)
      })
    })
  },

  componentWillMount: function() {
    this.searchArticles()
  },

  render: function() {
    var posts = _.map(this.state.posts, (post) => {
      return (
        <li>
          <a href={post.thread.url}>
            <img className='news-img' src={post.thread.main_image} alt='main-img' />
          </a>
          <h3>
            <a href={post.thread.url} >{post.title}</a>
          </h3>
          <p><span>{post.published}</span></p>
          <p>{post.text}</p>
        </li>
      )
    })

    return (
      <div className="news-story">
        <p>most recent week's news...</p>
        <h3>{ this.props.companyName.replace(/\b[a-z]/g,function(f){
                return f.toUpperCase()
              })
            }
      </h3>
        <ul>{posts}</ul>
      </div>
    )
  }
})

export default News