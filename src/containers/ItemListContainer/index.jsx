import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import ItemList from '../../components/ItemList';
import './style.css';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch('/mocks/data.json');
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log("Hubo un error");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  useEffect(() => {
    if (params?.categoryId) {
    const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
    setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos);
    };
  }, [params, productos])
  
  const handleAdd = () => {
    console.log("Se agregó al carrito")
  }

  return (
    <div>
        {<p className='greeting'>{greeting}</p>}
        {productos ?
         <ItemList products={productosFiltrados}/>
         :
         null
        }
        <ItemCount handleAdd={handleAdd}/>
    </div>
  )
}

export default ItemListContainer
