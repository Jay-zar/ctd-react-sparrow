import React, { useEffect } from 'react'; 
import AddToDoForm from './addToDoForm';
import ToDoList from './todolist';

function App() {
   //read the list from local storage after load 
  const [toDoList, setToDoList]= React.useState([]); 
  const [isLoading, setIsLoading]= React.useState(true);
  const addToDo= (newToDo)=> {
    setToDoList([...toDoList, newToDo])
  }
  useEffect(()=> {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
    {headers: {Authorization: `Bearer {REACT_APP_AIRTABLE_API_KEY}`}})
    .then((result)=> {
      console.log('result', result);
      setToDoList(result.records.toDoList);
      setIsLoading(false);
    })
    .catch((error)=> {
      console.log('error', error)
    })
  }, [toDoList]);
  //setting list from the input box
  useEffect(()=> {
    if (isLoading === false) {
      localStorage.setItem('savedToDoList', JSON.stringify(toDoList))
    }
  }, [toDoList]);
  const removeToDo= (id)=> {
    const filteredToDoList= toDoList.filter((todo)=> todo.id !== id);
    setToDoList(filteredToDoList);
}
  return (
    <div style={{ textAlign: 'center' }}>
     <h1>To Do List</h1>
     <AddToDoForm onAddToDo={addToDo}/>
     {isLoading=== true && <p>Loading....</p>}
     {isLoading=== false && <ToDoList toDoList={toDoList} onRemoveToDo={removeToDo}/>} 
    </div>
  );
}

export default App;
