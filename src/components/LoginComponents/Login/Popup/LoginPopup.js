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
    console.log(e.target.id);
    if (e.target.id === "login") {
      showLogin(!login);
      showSignup(false)
    }
    if (e.target.id === "signup") showSignup(!signup);
    sessionStorage.clear();
    if(e.target.id==='succes'){
      showLogin(!login);
      showSignup(false)
  }
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
          <Sign onLogin={showLoginHandler} error={classes.error} succes={classes.succes}/>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
