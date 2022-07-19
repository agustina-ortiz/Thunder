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
            {cart.length && <span className='productsCarrito'>({cart.length})</span>}
        </div>
      }
    </>
  )
}

export default CartWidget