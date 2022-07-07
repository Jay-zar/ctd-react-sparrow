import React, { useEffect } from 'react'; 
import { BrowserRouter, Route, Routes, Redirect, Link} from 'react-router-dom';
import ToDoContainer from './components/ToDoContainer';
import style from './components/ToDoList.module.css';
import Header from './components/Header';
import HomePage from './Pages/Home';
import GoalPage from './Pages/Goals';

function App() {

  return (
   <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/goals" element={<GoalPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
