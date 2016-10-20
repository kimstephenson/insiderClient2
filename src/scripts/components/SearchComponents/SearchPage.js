import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import GifModal from './GifModal'
import Request from 'superagent'
import '../../../css/search.scss'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: []
    }
  }

  //this.handleTermChange = this.handleTermChange.bind(this)

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`

    Request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
      console.log(res.body.data[0])
    })
  }

  render() {
    return (
      <div className="search-page">
        <SearchBar onTermChange={this.handleTermChange} />
        <SearchResults gifs={this.state.gifs} />
      </div>
    )
  }
}

export default SearchPage