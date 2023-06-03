import React, { useState } from "react";
import classes from "./LoginPopup.module.css";
import LoginHandler from "../../Data/LoginHandler";
import SignHandler from "../../Data/SignHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const LoginPopup = () => {
  const [login, showLogin] = useState(false);
  const [signup, showSignup] = useState(false);
  const showLoginHandler = (e) => {
    e.preventDefault();
    if (e.target.id === "login" || e.target.id === "succes") {
      showLogin(!login);
      showSignup(false);
    }
    if (e.target.id === "signup" || e.target.id === "create") {
      showSignup(!signup);
      showLogin(false);
    }
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
          <LoginHandler handler={showLoginHandler} />
        </div>
      )}
      {signup && (
        <div className={classes.loginPage}>
          <button onClick={collapse} className={classes.icon}>
            <FontAwesomeIcon icon={faCircleChevronUp} />{" "}
          </button>
          <SignHandler
            onLogin={showLoginHandler}
            error={classes.error}
            succes={classes.succes}
          />
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
