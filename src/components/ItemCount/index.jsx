import React, { useState } from 'react';
import './style.css';

const ItemCount = ({handleAdd, initialStock}) => {

  const initial = 1;

  const stock = 20;

  const [counter, setCounter] = useState(initial);

  const addProduct = (num) => {
    setCounter(counter + num);
  };

  return (
    <div className='countContainer'>
      <div className='counterPrincipal'>
        <button className='botonMasMenos'
          onClick={() => addProduct(-1)}
          disabled={counter === initial ? true : null}>
            -
        </button>
        <p className='counter'>{counter}</p>
        <button className='botonMasMenos'
          onClick={() => addProduct(+1)}
          disabled={counter === stock ? true : null}>
          +
        </button>
      </div>
      <button className='botonAgregar' onClick={()=> handleAdd(counter)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount