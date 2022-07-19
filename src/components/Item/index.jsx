import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
  
  const navigate = useNavigate();
  
  const handleDetail = () => {
    console.log('navega');
    navigate(`/detail/${product.id}`)
  }

  return (
    <Card className='cardGeneral'  onClick={handleDetail}>
      <Card.Img className='cardImage' variant="top" src={product.thumbnailUrl} />
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle' >{product.title}</Card.Title>
        <Card.Text className='cardPrecio' >
          ${product.price}
        </Card.Text>
        <Button className='cardButton'>Ver detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default Item
