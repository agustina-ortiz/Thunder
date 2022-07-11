import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to ='/category/capsuleI'>Capsule I</Link></li>
               <li><Link to='/category/capsuleII'>Capsule II</Link></li>
               <li><Link to='/category/capsuleIII'>Capsule III</Link></li>
            </ul>  
            <div className='brand'><Link to='/'>Thunder</Link></div>
            <CartWidget/> 
        </nav>
    )
}

export default NavBar;