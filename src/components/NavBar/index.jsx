import React from 'react';
import CartWidget from '../CartWidget';
import './style.css';

const NavBar = () => {
    return(
        <ul>
           <li><a className="active" href="#home">Home</a></li>
           <li><a href="#news">Buzos</a></li>
           <li><a href="#contact">Contacto</a></li>
           <li><a href="#about">Nosotros</a></li>
           <CartWidget/>
           <div className='brand'>Thunder</div>
        </ul>   
    )
}

export default NavBar;