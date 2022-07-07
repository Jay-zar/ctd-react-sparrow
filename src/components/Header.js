import React from 'react'
import {Link}  from 'react-router-dom';
import style from './ToDoList.module.css';

function Header () {

    return (
    <div className= {style.Header}>
        <Link to="/">Home</Link>
        <Link to="/goals">Goals</Link>
    </div>)
    
}

export default Header;