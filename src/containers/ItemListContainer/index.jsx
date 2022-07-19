import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import './style.css';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();
  console.log(params);

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
    }
  }, [params, productos])

  return (
    <div>
        {productos ?
         <ItemList products={productosFiltrados}/>
         :
         <p>Loading...</p>
        }
    </div>
  )
}

export default ItemListContainer
