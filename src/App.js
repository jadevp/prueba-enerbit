import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import Inventarios from "./components/Inventarios";

function App() {
  return (


    
        <Routes> 
          <Route exact path="/"  element={ <Login/>} />
          <Route exact path="/invetarios" element={ <Inventarios/> } />
        </Routes>
     
  
  );
}


export default App;
