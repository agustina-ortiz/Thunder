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
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await response.json();
                setProductDetail(data);
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