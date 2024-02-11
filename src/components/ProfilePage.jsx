import React, { useState } from "react";
import "./styling.css";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "",
    pancard: "",
    adharcard: "",
    gender: "Male", // Default gender value
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data to local storage
    localStorage.setItem("prfileData", JSON.stringify(userData));
    navigate("/confirmation",{state: {userData}});
  };

  const nameRegex = /^[a-zA-Z ]{2,30}$/;

  // Regular expression for Pancard validation
  const pancardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  // Regular expression for Adhar Card validation
  const adharcardRegex = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;

  const handleNameValidation = (e) => {
    if (nameRegex.test(e.target.value)) {
      // If the value matches the pattern, set the input as valid
      e.target.setCustomValidity("");
    } else {
      // If the value doesn't match the pattern, set a custom validation message
      e.target.setCustomValidity("Invalid Name format");
    }
  };

  const handlePancardValidation = (e) => {
    if (pancardRegex.test(e.target.value)) {
      // If the value matches the pattern, set the input as valid
      e.target.setCustomValidity("");
    } else {
      // If the value doesn't match the pattern, set a custom validation message
      e.target.setCustomValidity("Invalid Pancard format");
    }
  };

  const handleAdharcardValidation = (e) => {
    if (adharcardRegex.test(e.target.value)) {
      // If the value matches the pattern, set the input as valid
      e.target.setCustomValidity("");
    } else {
      // If the value doesn't match the pattern, set a custom validation message
      e.target.setCustomValidity("Invalid Adhar Card format");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Enter your Personal details</h1>
      <br/>
      <div className="formInput">
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={(e) => {
              handleChange(e);
              handleNameValidation(e);
            }}
            required
          />
           </div>
        <br/>
        <div className="formInput">
          <label>PAN Number*</label>
          <input
            type="text"
            name="pancard"
            value={userData.pancard}
            onChange={(e) => {
              handleChange(e);
              handlePancardValidation(e);
            }}
            required
          />
          </div>
          <br/>
          <div className="formInput">
          <label>Gender</label>
          <select name="gender" value={userData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br/>
        <div className="formInput">
          <label>Adhar Card</label>
          <input
            type="text"
            name="adharcard"
            value={userData.adharcard}
            onChange={(e) => {
              handleChange(e);
              handleAdharcardValidation(e);
            }}
            required
          />
        </div>
        
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


 
export default ProfilePage;
