import './assets/css/Login.css'
import logo from '../img/mainLogo.bea5a270.svg'

export default function Login() {
  return (
        <div className="wrapper fadeInDown">
      <div id="formContent">
      

        <div className="fadeIn first">
          <img src= {logo} width="100px" alt="User Icon" />
        </div>

      
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username"/>
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="password"/>
          <input type="submit" className="fadeIn fourth" value="Log In"/>
        </form>

      
        <div id="formFooter">
          
        </div>

      </div>
    </div>
  );
}
