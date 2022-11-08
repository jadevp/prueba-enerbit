import React, {useState} from 'react'
import './assets/css/Login.css'
import logo from '../img/mainLogo.bea5a270.png'
import { useNavigate } from 'react-router-dom'


const Login2 = () => {
   
 
 
  const comprobarSesion = () => {
    var sesion = localStorage.getItem("miLogin");
    if(sesion){
      return JSON.parse(sesion);
    }else{
      return false;
    }
  }
  const navigate = useNavigate();

    const [miLogin, setLog] = useState(comprobarSesion());
    const [username, setUsername] = useState (" ");
    const [pass, setUpassword] = useState (" ");


  

  const managersubmint =(e)=>{
    e.preventDefault();
    var Usuario = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if(Usuario.length===0 || password.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(username === "admin" && pass==="admin"){
        setLog(true);
        localStorage.setItem("miLogin", true);
        localStorage.setItem("usu", username);
       navigate("./Inventarios")

       }else{
        setLog(false);
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("login").value = "";
        document.getElementById("password").value = "";
        document.getElementById("login").focus();
      }
    }
  }
    
  
    
    
    return (
    
    <div className="wrapper fadeInDown">
   
  

          <div id="formContent">


            <div className="fadeIn first">
              <img src= {logo} width="100px" alt="User Icon" />
            </div>


                <form >
                  <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username"onChange={ (e)=>setUsername(e.target.value)} />
                  <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" onChange={ (e)=>setUpassword(e.target.value)} />
                  <input type="submit" className="fadeIn fourth" value="Log In" onClick={managersubmint}/>
                
                </form>
            
            <div id="formFooter">
            

            </div>
            
          </div>

         </div>

  
  )
}

export default Login2