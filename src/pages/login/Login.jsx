import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div>
      <div className="login flex-center">
        <div className="loginWrapper">
          <div className="loginLeft flex-center">
            <h3 className="loginLogo">Logo</h3>
            <span className="loginDescription">
              Connect with friends on soso!
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input type="email" placeholder="Email" className="loginInput" />
              <input type="password" placeholder="Password" className="loginInput" />
              <button type="button" className="loginButton">Log In</button>
              <span className="loginForget">Forgot Password?</span>
              <button type="button" className="loginRegister">Create a new account.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
