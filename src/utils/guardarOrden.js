import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";
import swal from 'sweetalert2';

const guardarOrden = (cart, orden) => {
  console.log(cart);
  console.log(orden);

  const batch = writeBatch(db);

  const outOfStock = [];

  cart.forEach((productoEnCart) => {
    getDoc(doc(db, 'products', productoEnCart.id))
    .then(async(documentSnapshot) => {
        const producto = {...documentSnapshot.data(), id:documentSnapshot.id};

        if (producto.stock >= productoEnCart.quantity) {
            batch.update(doc(db, 'products', producto.id), {
                stock: producto.stock - productoEnCart.quantity
            })
        } else {
            outOfStock.push(producto);
        }
        console.log(outOfStock);

        if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), orden).then(({id}) => {
                batch.commit().then(() => {
                    swal.fire({
                        title: 'Se generó la orden con id: ' + id,
                        icon:'success',
                        confirmButtonText: "Aceptar",
                        confirmButtonColor: "#883CC4",
                    });
                });
            }).catch((err) => {
                console.log(`Error: ${err.message}`);
            });
        } else {
            swal.fire({
                title: `Lo siento! ${producto.title} fuera de stock`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#883CC4",
            });
        };
    });
  });


}

export default guardarOrden