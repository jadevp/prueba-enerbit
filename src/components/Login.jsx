import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {

        render(){
        return (
            <React.Fragment>

            <div classname="wrapper fadeInDown">
            <div id="formContent">
        


            <div classname="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
            </div>

            <form>
            <input type="text" id="login" classname="fadeIn second" name="login" placeholder="login"/>
            <input type="text" id="password" classname="fadeIn third" name="login" placeholder="password"/>
            <input type="submit" classname="fadeIn fourth" value="Log In"/>
            </form>

            <div id="formFooter">
            <a classname="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
            </div>
            </React.Fragment>
        );
        }
    }
export default Login