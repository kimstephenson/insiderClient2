import React from 'react'
import Header from './Header'

const Layout = React.createClass ({
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