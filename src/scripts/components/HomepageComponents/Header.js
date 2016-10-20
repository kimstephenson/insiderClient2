var React = require('react')
import '../../../css/Header.css'

var Header = React.createClass({
  render: function() {
    return(
    <div className="HeaderBar">
      <img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/>
      <div className="logo">Smarter Bear</div>
      <div className="useractions">
        <ul>
          <li>Name</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>

    )
  }
})

export default Header
