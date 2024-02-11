import React, { useState } from "react";
import "./styling.css";
import { NavLink, useNavigate } from "react-router-dom";


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false); // To track login error

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the stored user data from local storage
    const storedData = JSON.parse(localStorage.getItem("userData"));

    // Check if the email and password match the stored credentials
    if (storedData && values.email === storedData.email && values.password === storedData.password) {

      setLoginError(false); // Reset login error if credentials are correct
      // Here, you can add any logic you need to handle a successful login
      navigate("/profile");
    } else {

        setLoginError(true); // Show login error if email or password is incorrect
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="formInput">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
            required
          />
        </div>
        <NavLink to="/forgetpass">Forget password?</NavLink>
        {loginError && <p style={{ color: "red" }}>Incorrect email or password.</p>}
        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate("/signup")}>
          Go to SignUp page
        </button>
      </form>
    </div>
  );
};

export default Login;
