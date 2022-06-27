import React, { useState } from 'react'
import './style.css'

const ItemCount = ({handleAdd, initialStock}) => {

    const initial = 1;

    const stock = 12;

    const [counter, setCounter] = useState(initial);

    const addProduct = (num) => {
        setCounter(counter + num);
    }

  return (
    <div className='countContainer'>
        <p>{counter}</p>
        <button className='boton'
         onClick={() => addProduct(-1)}
         disabled={counter === initial ? true : null}>
            -
        </button>
        <button className='boton'
         onClick={() => addProduct(+1)}
         disabled={counter === stock ? true : null}>
            +
        </button>
        <button className='botonAgregar' onClick={handleAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount