import React from "react";
import "./confirmationPage.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ConfirmationPage = (props) => {
    const location = useLocation();
    const userData = location?.state?.userData;
    
  const navigate = useNavigate();

  const handleConfirm = () => {
    alert("Your data has been saved successfully");
    navigate("/"); // Redirect to the home page after confirmation
  };

  return (
    <div className="confirmPage">
      <h1>Review Your Data</h1>
      <br/>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Pancard: {userData.pancard}</p>
          <p>Gender: {userData.gender}</p>
          <p>Adharcard: {userData.adharcard}</p>
        </div>
      )}
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default ConfirmationPage;
