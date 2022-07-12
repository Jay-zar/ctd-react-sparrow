import React, { useRef , useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './InputWithLabel.module.css';
const InputWithLabel= ({children, toDoTitle, handleTitleChange}) => {
    const inputRef= React.useRef();
  useEffect(()=>
        {inputRef.current.focus()}, []);
    return (
        <>
            <label htmlFor="toDoTitle">{children}</label>
            <input placeholder="Add an item" className={style.InputBar} id="toDoTitle" type="text" name="title" value={toDoTitle} onChange={handleTitleChange} ref={inputRef}/>
        </>
    ) 
}

InputWithLabel.propTypes = {
    children: PropTypes.string,
    toDoTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired
}

export default InputWithLabel;