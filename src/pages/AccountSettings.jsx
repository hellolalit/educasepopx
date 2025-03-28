import React from "react";
import { useNavigate } from "react-router-dom";
import "./Accountsettings.css";

const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="settings">
      <h1>Account Settings</h1>
      <div className="profile">
        <img src="https://via.placeholder.com/100" alt="Profile" />
        <h2>Marry Doe</h2>
        <p>Marry@gmail.com</p>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Accountsettings;
