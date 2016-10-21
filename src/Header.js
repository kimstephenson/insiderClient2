const React = require('react')
const { Link } = require('react-router')
import { browserHistory } from 'react-router';
import SearchBar from './scripts/components/SearchComponents/SearchBar'
import './css/Header.css'
const { connector } = require('./Store')

var Header = React.createClass({

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },

  handleKeyPress: function(event) {
    if (event.key === 'Enter') {
      console.log('router')
      browserHistory.push(`/search/${this.state.searchTerm}`)  
    }
  },

  render: function() {
    return(
      <header className="HeaderBar header">
          <Link to='/' className='brand-link'>
            <img src='/smarter-bear-logo.png' alt="bear-logo" className="logo"/>
            <div className="logo-title">Smarter Bear</div>
          </Link>

        <input type='text' className='searchBar' placeholder='Search by company or ticker' value={this.props.searchTerm} onChange={this.handleSearchTermEvent} onKeyPress={this.handleKeyPress} />
      </header>
    )
  }
})

export default connector(Header)
