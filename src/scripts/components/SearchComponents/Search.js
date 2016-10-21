const React = require('react')
const { object } = React.PropTypes
import SearchCard from './SearchCard'
import Header from '../../../Header'
import '../../../css/search.scss'

const Search = React.createClass({
  getInitialState () {
    return { searchTerm: '' }
  }, 

  propTypes: {
    route: object
  },
  
  handleSearchTermChange (value) {
    this.setState({ searchTerm: value })
  },

  render() {
    return (

      <div className='search-page'>
        <Header 
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
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