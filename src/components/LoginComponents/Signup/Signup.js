import React, { useState } from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";
import Info from "./Info/Info";
import Submit from "../Button/Submit";
import Data from "./Number/Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const Signup = (props) => {
  const [passwordFieldCompleted, setPasswordFieldCompleted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const passwordHandler = (e) => {
    e.preventDefault();
    setPasswordFieldCompleted(true);
    console.log(passwordFieldCompleted);
  };

  const validate = (e) => {
    if (e.target.id === "confirmPassword") {
      console.log(localStorage.getItem("password"));
      if (e.target.value === localStorage.getItem("password")) {
        e.target.style.outline = "1px solid green";
        localStorage.setItem(e.target.id, e.target.value);
      }
      if (e.target.value !== localStorage.getItem("password")) {
        e.target.style.outline = "1px solid red";
        localStorage.removeItem(e.target.id);
      }
    } else if(e.target.id ==="password" && localStorage.getItem('confirmPassword')){
      if(e.target.value !==localStorage.getItem('confirmPassword')){
        e.target.style.outline = "1px solid red";
        localStorage.removeItem(e.target.id);
      }else if(e.target.value ===localStorage.getItem('confirmPassword')){
        e.target.style.outline = "1px solid green";
        localStorage.setItem(e.target.id, e.target.value);
      }
    }else {
      if (e.target.value.length > 0 && e.target.checkValidity()) {
        localStorage.setItem(e.target.id, e.target.value);
        e.target.style.outline = "1px solid green";
      } else if (e.target.value.length === 0) {
        e.target.style.outline = "none";
        localStorage.removeItem(e.target.id);
      } else {
        e.target.style.outline = "1px solid red";
        localStorage.removeItem(e.target.id);
      }
    }
  };
  const btnEnabler = () => {
    if (
      localStorage.getItem("name") &&
      localStorage.getItem("lastname") &&
      localStorage.getItem("email") &&
      localStorage.getItem("number") &&
      localStorage.getItem('password')&&
      localStorage.getItem('confirmPassword')
    ) {
      setIsDisabled(false);
    }else{
      setIsDisabled(true);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <button onClick={props.onCollapse} className={classes.icon}>
          <FontAwesomeIcon icon={faCircleChevronUp} />{" "}
        </button>

        <form onInput={validate} onChange={btnEnabler}className={classes.form}>
          <Info />
          <Data />
          <div className={classes.passwordField}>
            <Password passwordHandler={passwordHandler} />
          </div>

          <Submit className={classes.btn} disabled={isDisabled}>
            SIGN
          </Submit>
        </form>
      </div>
    </div>
  );
};

export default Signup;
