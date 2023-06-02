import React, { useState } from "react";
import classes from "./LoginPopup.module.css";
import Login from "../LoginPage/Login";
import Sign from "../../Signup/Data/Sign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const LoginPopup = () => {
  const [login, showLogin] = useState(false);
  const [signup, showSignup] = useState(false);
  const showLoginHandler = (e) => {
    if (e.target.id === "login") {
      showLogin(!login);
      showSignup(false)
    }
    if (e.target.id === "signup") showSignup(!signup);
    sessionStorage.clear();
  };

  const collapse = (e) => {
    showSignup(false);
    showLogin(false);
  };

  return (
    <div className={classes.section}>
      <button
        onClick={showLoginHandler}
        id="login"
        name="login"
        className={classes.login}
      >
        Log in{" "}
      </button>
      <p className={classes.quest}>New customer?</p>
      <button
        id="signup"
        onClick={showLoginHandler}
        className={classes.sign}
        name="signup"
      >
        Create account
      </button>
      {login && (
        <div className={classes.loginPage}>
          <button onClick={collapse} className={classes.icon}>
            <FontAwesomeIcon icon={faCircleChevronUp} />{" "}
          </button>
          <Login />
        </div>
      )}
      {signup && (
        <div className={classes.loginPage}>
          <button onClick={collapse} className={classes.icon}>
            <FontAwesomeIcon icon={faCircleChevronUp} />{" "}
          </button>
          <Sign />
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
