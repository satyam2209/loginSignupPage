import { useState } from "react";
import "./styling.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, pattern, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  // Convert the pattern string to a regular expression using RegExp constructor
  const patternRegex = new RegExp(pattern);

  const handleValidation = (e) => {
    if (patternRegex.test(e.target.value)) {
      // If the value matches the pattern, set the input as valid
      e.target.setCustomValidity("");
    } else {
      // If the value doesn't match the pattern, set a custom validation message
      e.target.setCustomValidity(errorMessage);
    }
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={(e) => {
          onChange(e);
          handleValidation(e);
        }}
        onBlur={(e) => {
          handleFocus(e);
          handleValidation(e);
        }}
        onFocus={() => {
          inputProps.name === "confirmPassword" && setFocused(true);
        }}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
