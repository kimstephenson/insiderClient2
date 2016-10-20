import React from 'react'

const SearchCard = ({company, onCardSelect}) => {
  return (
    <a href={`/companies/${company.name}`}>
      <div className="search-card" onClick={() => onCardSelect(company)}>
        <img src={'http://fakeimg.pl/300'} />
        <h2>{company.name}</h2>
        <h3>{company.transactions_total}</h3>
        <p>Traded this quarter</p>
        <p>{company.insiders} insiders</p>
      </div></a>
  )
}

export default SearchCard