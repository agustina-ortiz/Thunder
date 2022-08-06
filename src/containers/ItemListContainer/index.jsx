import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import getCollection from '../../utils/getCollection';
import swal from 'sweetalert2';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productos = await getCollection("products");
        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
          swal.fire({
            title: 'Ha ocurrido un error',
            icon: 'error',
            timer: 2000
          });
      };
    };
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

  return (
    <div>
        {productos ?
         <ItemList products={productosFiltrados}/>
         :
         <p>Loading...</p>
        }
    </div>
  );
};

export default ItemListContainer
