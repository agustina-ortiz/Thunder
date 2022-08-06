import React, { createContext, useState } from 'react';
import swal from 'sweetalert2';

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) => {
        console.log(producto, cantidad);
        const productoRepetido = isInCart(producto);
        console.log(productoRepetido);
        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart]);
        } else {
            setCart([...cart, {...producto, quantity: cantidad}])
        };
    };

    const removeItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    };

    const clearCartAlert = () => {
        swal.fire({
            title: '¿Desea vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonText: "Si",
            confirmButtonColor: "#883CC4",
            cancelButtonColor: "#883CC4",
        }).then( (result) => {
            if(result.isConfirmed) {
                setCart([]);
            }
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    };

  return (
    <Shop.Provider value={{addItem, cart, removeItem, clearCart, clearCartAlert}}>
        {children}
    </Shop.Provider>
  );
};


export default ShopProvider