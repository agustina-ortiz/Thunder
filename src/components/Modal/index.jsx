import React from 'react';
import './style.css';

const Modal = ({children, isOpen, closeModal}) => {
  return <article className={`modal ${isOpen && "is-open"}`}>
    <div className='modalContainer'>
        <button className="modalClose" onClick={closeModal}>X</button>
        {children}
    </div>
  </article>
};

export default Modal;