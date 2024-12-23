
import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";  // Import FontAwesome icons

const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        <FaGoogle className="social-icon" /> Google
      </button>
      <button className="social-button">
        <FaApple className="social-icon" /> Apple
      </button>
    </div>
  );
};

export default SocialLogin;