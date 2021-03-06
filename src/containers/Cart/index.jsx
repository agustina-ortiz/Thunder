import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContacForm'
import Modal from '../../components/Modal'
import { Shop } from '../../context/ShopContext'
import { useModal } from '../../hooks/useModal'
import './style.css'

const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(Shop);
  console.log(cart.length);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <>
    {cart.length > 0 ?
      <div className='divContainer'>
        {cart.map(producto => {
          return <div key={producto.id} className='cardCarrito'> 
          <h2>{producto.title}</h2>
          <img src={producto.thumbnailUrl} width='200px' alt='buzo'/>
          <h3 className='description'>{producto.description}</h3>
          <h3>Cantidad: {producto.quantity}</h3>
          <h2>{'$' + producto.price}</h2>
          <button onClick={() => removeItem (producto.id)} className='botonEliminar'>Eliminar</button>
          </div>
        })}
        <div className='footer'>
          <p className='footerTotal'>Total</p>
          <p>$</p>
          <button onClick={clearCart} className='Footerbotones'>Vaciar carrito</button>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <ContactForm/>
          </Modal>
          <button onClick={openModal} className='Footerbotones'>Finalizar compra</button>
        </div>
      </div>
      :
      <div className='divVaciarCarrito'>
        <p className='txtCarritoVacio'>Tu carrito está vacío. Vuelve a la página de inicio para agregar productos.</p>
        <button className='btnVaciarCarrito'><Link to='/'>Volver a Home</Link></button>
      </div>
    }
    </>
  )
}

export default Cart