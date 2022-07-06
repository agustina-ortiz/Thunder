import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to ='/category/buzos'>Buzos</Link></li>
               <li><Link to='/category/contacto'>Contacto</Link></li>
               <li><Link to='/category/nosotros'>Nosotros</Link></li>
            </ul>  
            <div className='brand'><Link to='/'>Thunder</Link></div>
            <CartWidget/> 
        </nav>
    )
}

export default NavBar;