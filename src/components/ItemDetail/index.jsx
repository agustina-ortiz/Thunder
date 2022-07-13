import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import './style.css'

const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  product.stock = 4;
  const [qtyAdded, setQtyAdded] = useState(0);

  const {addItem} = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }

  const handleFinish = () => {
    addItem(product, qtyAdded);
    navigate('/cart');
  }

  console.log(qtyAdded);

  return (
    <div className='cardDetail'>
      <h1 className='title'>{product.title}</h1>
      <img height={300} src={product.thumbnailUrl} alt='buzo'/>
      <h2>{'$' + product.price}</h2>
      <h3 className='hoodie'>{product.hoodie}</h3>
      <h3 className='description'>{product.description}</h3>
      {!qtyAdded ?
        <ItemCount handleAdd={handleConfirm} initialStock={product.stock}/>
        :
        <button className='botonFinalizar' onClick={handleFinish}>Finalizar compra</button>
      }
    </div>
  )
}

export default ItemDetail