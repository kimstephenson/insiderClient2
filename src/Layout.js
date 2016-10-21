import React from 'react'
import Header from './Header'

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
        <Header searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        {this.props.children}
      </div>
    )
  }
}) 

export default Layout