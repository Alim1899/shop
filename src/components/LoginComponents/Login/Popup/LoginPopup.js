import React from "react";
import classes from "./LoginPopup.module.css";
import { Link } from "react-router-dom";
const LoginPopup = () => {
  return (
    <div className={classes.section}>
      <div>
        <Link to="login"><button className={classes.sign}>Sign In </button></Link>
        <p className={classes.quest}>New customer?</p>

        <Link to="signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginPopup;
