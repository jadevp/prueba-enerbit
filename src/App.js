import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function App() {
  return (

    <React.Fragment>
      <Router>
        <Routes> 
          <Route path="/" exact> <Login></Login> </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}


export default App;
