import PropTypes from 'prop-types';
import React from 'react';
import style from './ToDoList.module.css';

function SortToggle ({sortType, handleToggle}) {
    return(
        <button className={style.SortToggle} onClick={handleToggle}>
            {sortType}
        </button>
    )
} 

SortToggle.propTypes = {
    sortType: PropTypes.string,
    handleToggle: PropTypes.func
}

export default SortToggle;