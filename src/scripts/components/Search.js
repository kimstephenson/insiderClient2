var React = require('react')

var Search = React.createClass({
  render: function() {
    return(
      <div className="Search">
        <form>
          Search:<input type="text" name="search"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
})

export default Search