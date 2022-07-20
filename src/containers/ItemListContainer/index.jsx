import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { collection, query, getDocs } from "firebase/firestore";
import './style.css';
import { db } from '../../firebase/config';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          productos.push({id: doc.id, ...doc.data()});
        });

        console.log(productos);

        setProductos(productos);
        setProductosFiltrados(productos);
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
