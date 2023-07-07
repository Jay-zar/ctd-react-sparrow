import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import AddToDoForm from '../AddToDoForm/addToDoForm';
import SortToggle from '../SortToggle/SortToggle';
import ToDoList from '../ToDoList/todolist';
import LoadingMessage from '../LoadingMessage/LoadingMessage';
import style from './ToDoContainer.module.css';
import { AppProvider } from '../AppProvider';

function ToDoContainer ({tableID , tableName}) {
  
   //state variables and API urls used
   const [toDoList, setToDoList] = React.useState([]); 
   const [isLoading, setIsLoading] = React.useState(true);
   const [direction, setDirection] = React.useState('asc');
   const [sortType, setSortType] = React.useState('Sort A-Z');

   const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableID}?maxRecords=10&sort[0][field]=Title&sort[0][direction]=${direction}&view=Grid%20view`
   const updateURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableID}/`
   
   //read the list from local storage after load 
   useEffect(()=> {
     //fetching data from AirTable and parsing it
      fetch(url, 
      {method: "GET",
      headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
      .then((result)=> {
      return result.json();
      })
      .then((result)=> {
        result.records.sort((objA, objB) => {    
         return objB.fields.Title.toLowerCase() - objA.fields.Title.toLowerCase();
        })
      setToDoList(result.records);
      setIsLoading(false);
      })
      .catch((error) => {
      console.log(error);
      })
    }, [toDoList.length]);
 
   const addToDo= (newToDo) => {
     fetch(updateURL, {
       method: 'POST',
       headers: {
           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         records: [
           {
             fields: {
               Title: newToDo.title.trim(),
             },
           },
         ],
       }),
     })
     .then((result) => {
       return result.json()
     })
     .then((result) => {  
       setToDoList([...toDoList, result.records[0]])
     })
     .catch((error) => {
       console.log(error);
     })
   }
 
   const airtableDelete = (id) => {
     fetch(`${updateURL}${id}`, 
     {method: "DELETE",
     headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`},
     'Content-Type': 'application/json'})
     .catch((error) => {
     console.log(error);
     })
   }
 
 //remove the ToDo from the displayed list and send delete request to Airtable API for that item
   const removeToDo = (id) => {
     const filteredToDoList= toDoList.filter((todo)=> todo.id !== id);
     setToDoList(filteredToDoList);
     airtableDelete(id);
   }
   // handler function for sorting button, refetches toDoList with the toggled URL
    const handleToggle = () => {
      const newDirection = direction === 'desc' ? 'asc' : 'desc';;
      const newSortType = sortType === 'Sort Z-A' ? 'Sort A-Z' : 'Sort Z-A';
      setDirection(newDirection);
      setSortType(newSortType);
      fetch(url, 
        {method: "GET",
        headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
        .then((result)=> {
        return result.json();
        })
        .then((result)=> {
          result.records.sort((objA, objB) => {    
           return objB.fields.Title.toLowerCase() - objA.fields.Title.toLowerCase();
          })
        setToDoList(result.records);
        setIsLoading(false);
        })
        .catch((error) => {
        console.log(error);
        })
    }

    return(

        <div  className= {style.Root}>
        <div className= {style.Container}>
          <h1>{tableName}</h1>
          <AddToDoForm onAddToDo={addToDo}/>
          <SortToggle direction={direction} sortType={sortType} handleToggle={handleToggle}/>
          {isLoading=== true && <LoadingMessage/>}
          {isLoading=== false && <ToDoList toDoList={toDoList} onRemoveToDo={removeToDo}/>}
        </div> 
      </div>
    )
}

ToDoContainer.propTypes = {
  tableID: PropTypes.string,
  tableName: PropTypes.string
}

export default ToDoContainer;