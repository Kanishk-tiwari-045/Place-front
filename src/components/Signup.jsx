import React, { useState } from 'react';
import './Signup.css'; 

const Signin = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input style={{ borderRadius: '20px' }} type="text" placeholder="Name" />
          <input style={{ borderRadius: '20px' }} type="email" placeholder="Email" />
          <input style={{ borderRadius: '20px' }} type="password" placeholder="Password" />
          <div className="custom1" style={{ height: '22px' }}></div>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> 
          </div>
          <span>or use your account</span>
          <input style={{ borderRadius: '20px' }} type="email" placeholder="Email" />
          <input style={{ borderRadius: '20px' }} type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
