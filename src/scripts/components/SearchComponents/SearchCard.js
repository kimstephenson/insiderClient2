import React from 'react'

const SearchCard = (image) => {
  return (
    <div className="search-card">
      <img src={image.gif.images.downsized.url} />
    </div>
  )
}

export default SearchCard