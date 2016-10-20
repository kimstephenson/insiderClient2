import React from 'react'
import SearchCard from './SearchCard'

const SearchResults = (props) => {
  const searchCards = props.companies.map((company) => {
    return <SearchCard key={company.id} 
                       company={company} />
  })

  return (
    <div className="search-results">{searchCards}</div>
  )
}

export default SearchResults
