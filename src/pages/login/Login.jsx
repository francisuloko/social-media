import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div>
      <div className="login flex-center">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Logo</h3>
            <span className="loginDescription">
              Connect with friends on soso!
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
