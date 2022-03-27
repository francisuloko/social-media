import './register.css';

export default function Register() {
  return (
    <div>
      <div className="register flex-center">
        <div className="registerWrapper">
          <div className="registerLeft flex-center">
            <h3 className="registerLogo">Logo</h3>
            <span className="registerDescription">
              Connect with friends on Soso!
            </span>
          </div>
          <div className="registerRight">
            <div className="registerBox">
              <input type="email" placeholder="Email" className="registerInput" />
              <input type="password" placeholder="Password" className="registerInput" />
              <button type="button" className="registerButton">Log In</button>
              <span className="registerForget">Forgot Password?</span>
              <button type="button" className="registerRegister">Create a new account.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
