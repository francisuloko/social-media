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
              <input type="text" placeholder="Username" className="registerInput" />
              <input type="email" placeholder="Email" className="registerInput" />
              <input type="password" placeholder="Passowrd" className="registerInput" />
              <input type="password" placeholder="Confirm Password" className="registerInput" />
              <button type="button" className="registerButton">Sign Up</button>
              <button type="button" className="registerRegister">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
