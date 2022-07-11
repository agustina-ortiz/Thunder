import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../../components/ItemDetail';
import './style.css'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});

    const params = useParams();

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch('/mocks/data.json');
                const data = await response.json();
                const productoSeleccionado = data.find(item => item.id === parseInt(params.productId))
                setProductDetail(productoSeleccionado);
            } catch (error) {
                console.log('Ocurrió un error');
                console.log(error);
            }
        }
        getProductos();

    }, [params])

  return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer