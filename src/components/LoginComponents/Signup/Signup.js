import React from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";
import Info from "./Info/Info";
import Data from "./Number/Data/Data";
import useValidate from "./hooks/use-validate";

const isNotEmpty = (value) => value.trim() !== "";
const Signup = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useValidate(isNotEmpty);
  const firstNameClass = firstNameHasError ? classes.invalid : "";

  const submitHandler = (e) => {
    e.preventDefault();
    if (firstNameIsValid) resetFirstName();
  };
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        

        <form
          onSubmit={submitHandler}
          onChange={props.btnEnabler}
          className={classes.form}
        >
          <div
            className={firstNameClass}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          >
            {" "}
            <Info />
            {firstNameHasError && <p className={classes.error}>error</p>}
          </div>

          <Data />

          <Password />
        </form>
      </div>
    </div>
  );
};

export default Signup;
