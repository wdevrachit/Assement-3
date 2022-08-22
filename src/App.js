import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'

import './Components/SignIn/Login'
import "./style.css"
import Login from "./Components/SignIn/Login";
import UserDisplay from "./Components/UserDisplay";

import Customer from "./Components/Customer";


function App() {
 
  return (
    
    <Router>
      
      
    <div className="App">

    
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/UserDisplay' element={<UserDisplay/>}></Route>
        <Route exact path='/Customer' element={<Customer/>}></Route>
        
        
       

        </Routes>
      
      {" "}
      
      
    </div>
  
    </Router>
    
  );
}

export default App;