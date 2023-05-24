import React, { useState } from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";
import Info from "./Info/Info";
import Submit from "../Button/Submit";
import Number from "./Number/Number";
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
        <form className={classes.form}>
          <Info/>
          <Number/>
          <div className={classes.passwordField}>
            <Password passwordHandler={passwordHandler} />
          </div>
          
            <Submit className={classes.btn}>Sign</Submit>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
