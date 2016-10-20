import React from 'react'

const SearchCard = ({gif, onGifSelect}) => {
  return (
    <div className="search-card" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} />
    </div>
  )
}

export default SearchCard