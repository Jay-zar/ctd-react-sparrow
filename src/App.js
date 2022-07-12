import React from 'react'; 
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/Home';
import GoalPage from './Pages/Goals';
import LoginPage from './Pages/Login';
import stylesheet from './App.module.css'
function App() {

  return (
   <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/goals" element={<GoalPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
