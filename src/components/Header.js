import React from 'react'
import {Link}  from 'react-router-dom';
import style from './ToDoList.module.css';

const Header= () => {

    return (
    <div className= {style.Header}>
        <Link to="/" className= {style.NavItem}>Home</Link>
        <Link to="/goals" className= {style.NavItem}>Goals</Link>
    </div>)
    
}

export default Header;