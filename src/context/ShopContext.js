import React, { createContext, useState } from 'react'

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
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    }

  return (
    <Shop.Provider value={{addItem, cart, removeItem, clearCart}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider