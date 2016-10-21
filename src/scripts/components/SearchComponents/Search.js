const React = require('react')
const { object, string } = React.PropTypes
import SearchCard from './SearchCard'
import Header from '../../../Header'
import Layout from '../../../Layout'
const { connector } = require('../../../Store')
import '../../../css/search.scss'

const Search = React.createClass({

  propTypes: {
    route: object, 
    searchTerm: string
  },

  render() {
    return (
      <Layout>
        <div className='search-page'>
          <div className='search-results'>
            {this.props.route.companies
              .filter((company) => `${company.name} ${company.ticker}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0 )
              .map((company) => (
              <SearchCard {...company} key={company.id} />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
})

export default connector(Search)