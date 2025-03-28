import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/Accountsettings";
import "./App.css";  // For layout styling

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <div className="mobile-container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;