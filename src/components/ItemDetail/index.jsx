import React from 'react';
import swal from 'sweetalert2';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import './style.css';

const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  product.stock = 20;
  const [qtyAdded, setQtyAdded] = useState(0);

  const {addItem} = useContext(Shop);

  const handleConfirm = (qty) => {
    swal.fire({
      title: 'Su producto se ha añadido al carrito',
      icon: 'success',
      timer: 2000
    });
    addItem(product, qty);
    setQtyAdded(qty);
  };

  const handleFinish = () => {
    navigate('/cart');
  };
  
  const handleContinue = () => {
    navigate('/');
  };

  console.log(qtyAdded);

  return (
    <div className='cardDetail'>
      <h1 className='title'>{product.title}</h1>
      <img height={380} src={product.thumbnailUrl} alt='buzo'/>
      <h2>{'$' + product.price}</h2>
      <h3 className='hoodie'>{product.hoodie}</h3>
      <h3 className='descriptionDetail'>{product.description}</h3>
      {!qtyAdded ?
        <ItemCount handleAdd={handleConfirm} initialStock={product.stock}/>
        :
        <>
          <button className='botonSeguirYFinalizar' onClick={handleContinue}>Seguir comprando</button>
          <button className='botonSeguirYFinalizar' onClick={handleFinish}>Ir al carrito</button>
        </>
      }
    </div>
  );
};

export default ItemDetail