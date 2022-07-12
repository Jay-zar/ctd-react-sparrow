import React from 'react'
import {Link}  from 'react-router-dom';
import style from './Header.module.css';

const Header= () => {

    return (
    <div className= {style.Header}>
        <Link to="/Home" className= {style.NavItem}>Home</Link>
        <Link to="/goals" className= {style.NavItem}>Goals</Link>
        <Link to="/" className= {style.NavLogout}>Logout</Link>
    </div>)
    
}

export default Header;