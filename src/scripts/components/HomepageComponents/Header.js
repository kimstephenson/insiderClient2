const React = require('react')
import SearchBar from '../SearchComponents/SearchBar'
import '../../../css/Header.css'

var Header = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is my search term'
    }
  },

   handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },

  render: function() {
    return(
      <header className="HeaderBar">
        <div>
          <img src='/smarter-bear-logo.png' alt="bear-logo" className="logo"/>
          <div className="logo-title">Smarter Bear{this.state.searchTerm}</div>
        </div>

        <input value={this.state.searchTerm} className='search-term' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
      </header>
    )
  }
})

export default Header