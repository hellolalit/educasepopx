import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
      <h1>Create your PopX account</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Company Name" required />

        <div className="agency">
          <label>Are you an Agency?</label>
          <div>
            <label>
              <input type="radio" name="agency" value="yes" required /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" required /> No
            </label>
          </div>
        </div>

        <button type="submit" className="btn">Create Account</button>
      </form>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Register;
