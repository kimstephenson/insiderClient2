import React from 'react'
// import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

const TransactionGraph = React.createClass({

  render () {
    var someDiv = new ReactFauxDOM.Element('div')
    someDiv.innerHTML = <svg><circle cx={50} cy={50} r={10} fill="red" /></svg>
    
    return (
      <div>
        {someDiv.toReact()}
      </div>
    )
  }
})

export default TransactionGraph
