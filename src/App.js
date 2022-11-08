import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Inventarios from "./components/Inventarios";
import Login from "./components/Login";
import Modasl from "./components/Modasl";
import App2 from "./components/App2";


const App = () => {
 
   
  
  
  return (
    <>
  
    <Routes> 
     
      <Route exact path= "/" element= {<Login/>}/>
    
          
          
       
            <Route exact path="/Inventarios" element= {<Inventarios/>}/>
            <Route exact path="/App2" element= {<App2/>}/>
          
           

        </Routes>
        </>
     
  )
}

export default App;