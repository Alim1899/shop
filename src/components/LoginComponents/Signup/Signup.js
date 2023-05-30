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
  const passwordHandler = (e) => {
    e.preventDefault();
    setPasswordFieldCompleted(true);
    console.log(passwordFieldCompleted);
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <button onClick={props.onCollapse}
          className={classes.icon}><FontAwesomeIcon
          
          icon={faCircleChevronUp}
        /> </button>
        
        <form className={classes.form}>
          <Info />
          <Data />
          <div className={classes.passwordField}>
            <Password passwordHandler={passwordHandler} />
          </div>

          <Submit className={classes.btn}>SIGN</Submit>
        </form>
      </div>
    </div>
  );
};

export default Signup;
