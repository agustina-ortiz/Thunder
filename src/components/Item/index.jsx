import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './style.css'

const Item = ({product}) => {
  return (
    <Card className='cardGeneral'>
      <Card.Img className='cardImage' variant="top" src={product.thumbnailUrl} />
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle' >{product.title}</Card.Title>
        <Card.Text className='cardPrecio' >
          ${product.precio}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default Item
