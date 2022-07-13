import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import CartWidget from '../CartWidget';
import './style.css';

const NavBar = () => {

    const {estadoA} = useContext(Shop)
    console.log(estadoA);

    return (
        <nav>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to ='/category/capsuleI'>Capsule I</Link></li>
               <li><Link to='/category/capsuleII'>Capsule II</Link></li>
               <li><Link to='/category/capsuleIII'>Capsule III</Link></li>
               <li><a href='/#'>{estadoA}</a></li>
            </ul>  
            <div className='brand'><Link to='/'>Thunder</Link></div>
            <CartWidget/> 
        </nav>
    )
}

export default NavBar;