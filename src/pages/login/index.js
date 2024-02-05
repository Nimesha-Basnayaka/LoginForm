import React from 'react';
import './style.css'
import {authApisMiddleware} from '../../middleware/auth'

function Login(props) {

  function handleLogin(npm ,i ,cors) {
    authApisMiddleware.login()
  }
  return (
    <div>
      <h1>Login</h1>
      <div className="wrapper fadeInDown">
        <div id="formContent">
            <input type="text" id="email" className="fadeIn second" name="email" placeholder="email" />
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
            <button class="fedeIn fourth" onClick={handleLogin} >Login</button>
          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

