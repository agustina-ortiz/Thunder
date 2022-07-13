import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import './style.css'

const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(Shop);
  console.log(cart);

  return (
    <div className='divContainer'>
      {cart.map(producto => {
        return <div key={producto.id} className='cardCarrito'> 
        <h2>{producto.title}</h2>
        <img src={producto.thumbnailUrl} width='200px' alt='buzo'/>
        <h3>{producto.description}</h3>
        <h2>{'$' + producto.price}</h2>
        <button onClick={() => removeItem (producto.id)} className='botonEliminar'>Eliminar</button>
        </div>
      })}
       <button onClick={clearCart} className='botonVaciar'>Vaciar carrito</button>
    </div>
  )
}

export default Cart