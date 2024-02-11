import { useState, useEffect } from "react";
import "./styling.css";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";


const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPasswordPattern, setConfirmPasswordPattern] = useState("");

  const navigate = useNavigate();

  const getCurrentDate = () => {
  // Get the current date in YYYY-MM-DD format
  return new Date().toISOString().split("T")[0];
};

  const inputs = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        pattern:"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
        required: true,
    },
    
    {
      id: 2,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      max: getCurrentDate(),
      errorMessage: "Please enter a valid birthdate.",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: confirmPasswordPattern,
      required: true,
    },
  ];

  useEffect(() => {
    setConfirmPasswordPattern(`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`);
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = getCurrentDate();
    if (values.birthday >= currentDate) {
      // Birthday is invalid (current date or future date)
      return;
    }

    localStorage.setItem("userData", JSON.stringify(values));

    alert("Registration successful!");

    // After clicking "OK" in the alert, redirect to the login page
    navigate("/");
  };

  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <button type="submit">Submit</button>
      <button type="button" onClick={() => navigate("/")}>
        Go to SignIn page
      </button>
    </form>
  );
};


export default Signup;