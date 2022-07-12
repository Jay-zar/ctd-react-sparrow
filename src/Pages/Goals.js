import React from 'react';
import ToDoContainer from '../components/ToDoContainer/ToDoContainer';
import Header from '../components/Header/Header.js'
function GoalPage () {
  // tableID and tableName states for API calls and page elements 
  const tableID = "tblkaCIQzwLTleDoJ";
  const tableName = "Goals";
    return (
        <>
        <Header/>
        <ToDoContainer
          tableID={tableID} tableName={tableName}>
        </ToDoContainer>
      </>
    )
};

export default GoalPage;