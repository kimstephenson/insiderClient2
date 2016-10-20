import React from 'react'

const SearchCard = (props) => {
  return (
    <a href={`/companies/${props.name}`}>
      <div className="search-card" >
        <div className="logo">
          <img src={'http://fakeimg.pl/300'} />
        </div>
        <div className="stats">
          <h2>{props.name} ({props.ticker})</h2>
          <p><strong>{props.transactions_total} </strong>
           traded this quarter</p>
          <p><strong>{props.shares_outstanding} </strong>shares outstanding</p>
          <p><strong>{props.insiders}</strong> insiders</p>
          <p><strong>{props.confidence}</strong> confidence rating</p>
        </div>
      </div>
    </a>
  )
}

const { string, number } = React.PropTypes

SearchCard.propTypes = {
  name: string.isRequired,
  ticker: string.isRequired,
  shares_outstanding: string.isRequired,
  insiders: number.isRequired,
  confidence: number.isRequired
}

export default SearchCard