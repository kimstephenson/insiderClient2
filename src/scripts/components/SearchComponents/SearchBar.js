import React from 'react'
import { Link } from 'react-router'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: ''}
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onTermChange(term)
  }

  onInputSubmit(e) {
    this.props.onSubmit(e)
  }

 

  render() {
    return (
      <div>
<<<<<<< Updated upstream
        <input className="searchBar" placeholder='Search company or ticker' onChange={event => this.onInputChange(event.target.value)} />
=======
        <input className="searchBar" placeholder='Search company or ticker' onChange={this.handleSearchTermEvent}  />
        <Link to='/search' className='searchBtn'> Browse </Link>
>>>>>>> Stashed changes
      </div>
    )
  }
}

export default SearchBar
