import React from 'react';
import ToDoContainer from '../components/ToDoContainer/ToDoContainer';

function HomePage () {
  // tableID and tableName states for API calls and page elements 
  const tableID = "tbln7S0L5bCcELBkR";
  const tableName = 'To Do List';
    return (
        <ToDoContainer
        tableID={tableID} tableName={tableName}>
        </ToDoContainer>
    )
}

export default HomePage;