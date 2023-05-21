import React from "react";
import classes from "./LoginPopup.module.css";

const LoginPopup = () => {
  return (
    <div className={classes.section}>
      <div>
        <button>Sign Up</button>
        <p className={classes.quest}>New customer?</p>
        <a href=" " onClick={(e)=>{e.preventDefault()}}>Login</a>{" "}
      </div>
    </div>
  );
};

export default LoginPopup;
