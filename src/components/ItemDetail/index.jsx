import React from 'react'

const ItemDetail = ({product}) => {
    console.log(product);
  return (
    <div>
        <h1>{product.title}</h1>
        <img height={300} src={product.image}/>
        <h2>{product.price}</h2>
        <h3>{product.description}</h3>
    </div>
  )
}

export default ItemDetail