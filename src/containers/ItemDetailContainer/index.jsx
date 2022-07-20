import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});

    const params = useParams();

    useEffect(() => {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log(docSnap.id);
                    console.log("Document data:", docSnap.data());
                    const productDetail = {id: docSnap.id, ...docSnap.data()};
                    setProductDetail(productDetail);
                } else {
                     console.log("No such document!");
                }
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