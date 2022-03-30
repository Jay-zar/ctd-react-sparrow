import React from 'react';
import ToDoList from './ToDoList.js';
import AddToDoForm from './AddToDoForm.js';
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
      <ToDoList/>
      <AddToDoForm/>
    </div>
  );
}

export default App;
