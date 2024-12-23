


import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";  
import { MdEmail, MdLock } from "react-icons/md";  
import { Link, useNavigate } from "react-router-dom";  
import { auth } from "../firebase-config";  // Firebase config import
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";  

const SignUp = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();  

  // Function to handle Email Sign-up
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");  // Redirect to Login page after successful sign-up
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Function to handle Google Sign-up
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/dashboard");  // Redirect after successful login/signup
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Sign up with</h2>
      
      {/* Google login */}
      <div className="social-login">
        <button className="social-button" onClick={handleGoogleSignUp}>
          <FaGoogle className="social-icon" /> Google
        </button>
      </div>

      <p className="separator">
        <span>or</span>
      </p>

      {/* Display error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form className="login-form" onSubmit={handleSignUp}>
        {/* Email input field */}
        <div className="input-wrapper">
          <input 
            type="email" 
            placeholder="Email address" 
            className="input-field" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <i><MdEmail /></i>
        </div>

        {/* Password input field */}
        <div className="input-wrapper">
          <input 
            type={isPasswordShown ? "text" : "password"} 
            placeholder="Password" 
            className="input-field" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <i><MdLock /></i>
          <i onClick={() => setIsPasswordShown(!isPasswordShown)} className="material-icons eye-icon">
            {isPasswordShown ? "visibility" : "visibility_off"}
          </i>
        </div>

        {/* Confirm Password input field */}
        <div className="input-wrapper">
          <input 
            type={isPasswordShown ? "text" : "password"} 
            placeholder="Confirm Password" 
            className="input-field" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          <i><MdLock /></i>
          <i onClick={() => setIsPasswordShown(!isPasswordShown)} className="material-icons eye-icon">
            {isPasswordShown ? "visibility" : "visibility_off"}
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