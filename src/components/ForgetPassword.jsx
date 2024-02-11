import React, { useState } from "react";
import "./styling.css";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleResetPassword = () => {
    // Get the stored user data from local storage
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && email === storedData.email) {
      storedData.password = newPassword;
      localStorage.setItem("userData", JSON.stringify(storedData));
      setErrorMessage(""); // Reset any previous error message
      // Show the password reset success alert
      window.alert("Password reset successful!");
      // Navigate to the login page after clicking OK on the alert
      navigate("/");
    } else {
      setErrorMessage("Email is not registered.");
    }
  };

  return (
    <div>
      <div>
        <h1>Forget Password</h1>
        <br />
        <div className="formInput">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="formInput">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
