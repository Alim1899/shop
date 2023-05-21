import React from "react";
import classes from "./LoginPopup.module.css";

const LoginPopup = () => {
  return (
    <div className={classes.section}>
      <div>
        <button>Sign In</button>
        <p className={classes.quest}>New customer?</p>
        <a
          href=" "
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign Up
        </a>{" "}
      </div>
    </div>
  );
};

export default LoginPopup;
