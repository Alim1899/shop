import React from "react";
import classes from "./LoginPopup.module.css";
import { Link } from "react-router-dom";
const LoginPopup = () => {
  return (
    <div className={classes.section}>
      <div>
        <button>Sign In </button>
        <p className={classes.quest}>New customer?</p>

        <Link to="signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginPopup;
