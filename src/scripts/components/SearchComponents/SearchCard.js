import React from 'react'

const SearchCard = ({company, onCardSelect}) => {
  return (
    <a href={`/companies/${company.name}`}>
      <div className="search-card" onClick={() => onCardSelect(company)}>
        <div className="logo">
          <img src={'http://fakeimg.pl/300'} />
        </div>
        <div className="stats">
          <h2>{company.name} ({company.ticker})</h2>
          <p><strong>{company.transactions_total} </strong>
           traded this quarter</p>
          <p><strong>{company.shares_outstanding} </strong>shares outstanding</p>
          <p><strong>{company.insiders}</strong> insiders</p>
          <p><strong>{company.confidence}</strong> confidence rating</p>
        </div>
      </div></a>
  )
}

export default SearchCard