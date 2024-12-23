import { Link } from 'react-router-dom';  // Add this import

import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";  // Import FontAwesome icons
import { MdEmail, MdLock } from "react-icons/md";    // Material icons

const SignUp = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  return (
    <div className="login-container">
      <h2 className="form-title">Sign up with</h2>
      <div className="social-login">
        <button className="social-button">
          <FaGoogle className="social-icon" /> Google
        </button>
        <button className="social-button">
          <FaApple className="social-icon" /> Apple
        </button>
      </div>

      <p className="separator">
        <span>or</span>
      </p>

      <form className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder="Email address" className="input-field" required />
          <i><MdEmail /></i>
        </div>
        
        <div className="input-wrapper">
          <input type={isPasswordShown ? "text" : "password"} placeholder="Password" className="input-field" required />
          <i><MdLock /></i>
          <i onClick={() => setIsPasswordShown(!isPasswordShown)} className="material-icons eye-icon">
            {isPasswordShown ? "visibility" : "visibility_off"}
          </i>
        </div>

        <div className="input-wrapper">
          <input type={isConfirmPasswordShown ? "text" : "password"} placeholder="Confirm Password" className="input-field" required />
          <i><MdLock /></i>
          <i onClick={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)} className="material-icons eye-icon">
            {isConfirmPasswordShown ? "visibility" : "visibility_off"}
          </i>
        </div>

        <button type="submit" className="login-button">Sign Up</button>
      </form>

      <p className="signup-prompt">
        Already have an account? <Link to="/login" className="signup-link">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
