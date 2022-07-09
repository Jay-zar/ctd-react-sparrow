import React from 'react';
import style from './ToDoList.module.css';

function SortToggle ({sortType, handleToggle}) {
    return(
        <button className={style.SortToggle} onClick={handleToggle}>
            {sortType}
        </button>
    )
} 

export default SortToggle;