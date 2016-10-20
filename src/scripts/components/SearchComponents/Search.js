const React = require('react')
const { object } = React.PropTypes
import SearchCard from './SearchCard'
import '../../../css/search.scss'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  }, 

  propTypes: {
    route: object
  },
  
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },

  render() {
    return (

      <div className='search-page'>

        <div className='search-results'>
          {this.props.route.companies
            .filter((company) => `${company.name} ${company.ticker}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0 )
            .map((company) => (
            <SearchCard {...company} key={company.id} />
          ))}
        </div>
      </div>
    )
  }
})

export default Search