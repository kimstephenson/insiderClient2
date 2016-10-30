import React from 'react'
import Header from './Header'
import './css/app.css'

const Layout = React.createClass ({
  getInitialState() {
    return { searchTerm: '' }
  },

  handleSearchTermChange: function(event) {
    this.setState({ searchTerm: event.target.value })
  },

  render: function() {
    return(
      <div className='app-container'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}) 

export default Layout