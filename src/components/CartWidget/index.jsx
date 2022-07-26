import React from 'react'
import { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { Shop } from '../../context/ShopContext';
import './style.css'

const CartWidget = () => {

  const {cart} = useContext(Shop);

  return (
    <>
      {cart.length > 0 &&
        <div className='iconoCarrito'>
            <GrCart/>
            <span className='productsCarrito'>{cart.reduce((acum, productoActual) => acum += productoActual.quantity, 0)}</span>
        </div>
      }
    </>
  )
}

export default CartWidget