import React from 'react'
import './style.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greeting'>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer