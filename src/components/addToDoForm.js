import React from 'react';
import InputWithLabel from './InputWithLabel';
import style from './ToDoList.module.css';
import propTypes from 'prop-types';
const AddToDoForm= ({onAddToDo}) => {
    const [toDoTitle, setToDoTitle]=React.useState('');

    const handleTitleChange =(e) => {
        const newToDoTitle = e.target.value;
        setToDoTitle(newToDoTitle);
    }

    const handleAddToDo=(e) => {
        e.preventDefault();
        onAddToDo({title: toDoTitle, id: Date.now()});
        setToDoTitle("");
    };
    return(
        <form onSubmit={handleAddToDo}>
           <InputWithLabel toDoTitle={toDoTitle} handleTitleChange={handleTitleChange}/>
            <button className={style.AddToDoButton}>Add</button>
        </form>
    )
}

AddToDoForm.propTypes = {
    onAddToDo: propTypes.func.isRequired
}

export default AddToDoForm;