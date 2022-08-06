import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import NotFound from '../../components/NotFound';
import swal from 'sweetalert2'

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
                    <NotFound/>
                }
            } catch (error) {
                swal.fire({
                    title: 'Ha ocurrido un error',
                    icon: 'error',
                    timer: 2000
                });
            };
        };
        getProductos();

    }, [params])

  return (
    <ItemDetail product={productDetail}/>
  );
};

export default ItemDetailContainer