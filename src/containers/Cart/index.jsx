import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoTrashOutline } from 'react-icons/io5';
import ContactForm from '../../components/ContacForm';
import Modal from '../../components/Modal';
import { Shop } from '../../context/ShopContext';
import { useModal } from '../../hooks/useModal';
import './style.css';

const Cart = () => {
  const {cart, removeItem, clearCartAlert} = useContext(Shop);
  console.log(cart.length);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const precioTotal = () => {
    return cart.reduce((acc, producto) => acc + producto.price*producto.quantity, 0)
  };

  return (
    cart.length > 0 ?
      <div className='divContainer'>
        <table className='table'>
          <thead>
            <tr className="tablaHeader">
              <th className="titulo">Producto</th>
              <th className="titulo">Cantidad</th>
              <th className="titulo">Precio</th>
            </tr>
          </thead>
          <tbody>
            {cart.map (producto => {
              return (
                <tr key={producto.id} className='productoEnCart'>
                  <td className="tablaItem">
                    <img className='itemImage' src={producto.thumbnailUrl} width='40px' alt='buzo'/>
                    <p>{producto.title}</p>
                  </td>
                  <td className='itemQty'>{producto.quantity}</td>
                  <td className='itemPrice'>${producto.price}</td>
                  <td>
                    <button className='itemBoton' onClick={() => removeItem(producto.id)}><IoTrashOutline/></button>
                  </td>
                </tr>
              )
            })}
            <tr className='footer'>
              <td className='footerTotal'>Total</td>
              <td className='footerTotal'>${precioTotal()}</td>
            </tr>
            <tr className='botonesCart'>
              <button onClick={clearCartAlert} className='footerBotones'>Vaciar carrito</button>
              <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <ContactForm/>
              </Modal>
              <button onClick={openModal} className='footerBotones'>Finalizar compra</button>
            </tr>
          </tbody>  
        </table>
      </div>
      :
      <div className='divVaciarCarrito'>
        <p className='txtCarritoVacio'>Tu carrito está vacío. Vuelve a la página de inicio para agregar productos.</p>
        <button className='btnVaciarCarrito'><Link to='/'>Volver a Home</Link></button>
      </div>
  );
};

export default Cart