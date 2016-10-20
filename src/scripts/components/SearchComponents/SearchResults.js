import React from 'react'
import SearchCard from './SearchCard'

const SearchResults = (props) => {
  const searchCards = props.gifs.map((image) => {
    return <SearchCard key={image.id} gif={image} />
  })

  return (
    <div className="search-results">{searchCards}</div>
  )
}

export default SearchResults
