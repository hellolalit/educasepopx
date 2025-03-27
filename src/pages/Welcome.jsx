import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <button className="btn create-btn" onClick={() => navigate("/register")}>
        Create Account
      </button>
      <button className="btn login-btn" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default Welcome;
