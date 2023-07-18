import React from 'react'
import SingleCard from './SingleCard'

function Cards({universities}) {
  return (
    <div>
    {universities.map((obj, i) => (
        <SingleCard university={obj} key={i} />
    ))}
    </div>
  )
}

export default Cards