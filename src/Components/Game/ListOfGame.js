import React from 'react'
import Cards from './Cards'
import { list } from '../../data'
import './ListOFGame.css'

function ListOfGame({handleClick}) {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  )
}

export default ListOfGame