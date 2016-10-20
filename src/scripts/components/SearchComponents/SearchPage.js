import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import CardModal from './CardModal'
import Request from 'superagent'
import '../../../css/search.scss'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: [],
      selectedGif: null,
      modalIsOpen: false
    }
  }

  //this.handleTermChange = this.handleTermChange.bind(this)

  handleTermChange = (term) => {
    const url = `https://insiderapi.herokuapp.com/companies?search=${term}`

    Request.get(url, (err, res) => {
      this.setState({ companies: res.body })
      console.log(res.body)
    })
  }

  render() {
    return (
      <div className="search-page">
        <SearchBar onTermChange={this.handleTermChange} />
        <SearchResults companies={this.state.companies} />
      </div>
    )
  }
}

export default SearchPage