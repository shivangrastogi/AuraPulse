import React, { useState } from "react";
import "./App.css";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="login-box">
          <h1>Welcome to AuraPulse</h1>
          <p className="description">Please login to start your journey</p>
          
          {/* Username Field */}
          <div className="input-container">
            <input type="text" placeholder="Username" className="input-field" />
          </div>
          
          {/* Password Field */}
          <div className="input-container password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="input-field"
            />
            <div onClick={togglePasswordVisibility} className="eye-icon">
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Forgot Password */}
          <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          
          {/* Login Button */}
          <button className="login-button">Login</button>

          {/* "Or" Text with Social Media Icons */}
          <div className="social-login">
            <span className="or-text">or sign in with</span>
            <div className="social-icons">
              <FaGoogle className="social-icon" />
              <FaGithub className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaTwitter className="social-icon" />
            </div>
          </div>

          {/* Register Link */}
          <p className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
