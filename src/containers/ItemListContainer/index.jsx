import React from 'react'
import ItemCount from '../../components/ItemCount'
import './style.css'

const ItemListContainer = ({greeting}) => {

  const handleAdd = () => {
    console.log("Se agregó al carrito")
  }

  return (
    <div className='greeting'>
        {/* <p>{greeting}</p> */}
        <br></br>
        <ItemCount handleAdd={handleAdd}/>
    </div>
  )
}

export default ItemListContainer
