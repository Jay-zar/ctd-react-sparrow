import React from 'react';
import ToDoContainer from '../components/ToDoContainer/ToDoContainer';

function GoalPage () {
  // tableID and tableName states for API calls and page elements 
  const tableID = "tblkaCIQzwLTleDoJ";
  const tableName = "Goals";
    return (
        <ToDoContainer
        tableID={tableID} tableName={tableName}>
        </ToDoContainer>
    )
}

export default GoalPage;