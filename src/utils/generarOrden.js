const ordenGenerada = (cart, {name, email, telefono}) => {
    return {
        buyer: {
            nombre: name,
            email: email,
            telefono: telefono
        },
        items: cart
    }
}

export default ordenGenerada;