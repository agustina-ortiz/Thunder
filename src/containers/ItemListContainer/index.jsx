import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
import './style.css'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch('/mocks/data.json');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log("Hubo un error");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  const handleAdd = () => {
    console.log("Se agregó al carrito")
  }

  return (
    <div>
        {<p className='greeting'>{greeting}</p>}
        {productos ?
         <ItemList products={productos}/>
         :
         null
        }
        <ItemCount handleAdd={handleAdd}/>
    </div>
  )
}

export default ItemListContainer
