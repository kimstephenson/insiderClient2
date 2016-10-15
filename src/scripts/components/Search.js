var React = require('react')

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {company: ''}
  },
  handleCompanyChange: function(e) {
    this.setState({company: e.target.value})
  },
  handleSubmit: function() {
    this.context.router.push('/companies/' + this.state.company)
  },
  render: function() {
    return(
        <form className="Search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search" value={this.state.company} onChange={this.handleCompanyChange}/>
          <input type="submit" value="Submit"/>
        </form>
    )
  }
})

export default Search