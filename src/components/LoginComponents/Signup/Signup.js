import React from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";
import Info from "./Info/Info";
import Data from "./Number/Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const Signup = (props) => {

  const validate = (e) => {
    if (e.target.id === "confirmPassword") {
      if (e.target.value === sessionStorage.getItem("password")) {
        e.target.style.outline = "1px solid green";
        sessionStorage.setItem(e.target.id, e.target.value);
      }
      if (e.target.value !== sessionStorage.getItem("password")) {
        e.target.style.outline = "1px solid red";
        sessionStorage.removeItem(e.target.id);
      }
    } else if (
      e.target.id === "password" &&
      sessionStorage.getItem("confirmPassword")
    ) {
      if (e.target.value !== sessionStorage.getItem("confirmPassword")) {
        e.target.style.outline = "1px solid red";
        sessionStorage.removeItem(e.target.id);
      } else if (e.target.value === sessionStorage.getItem("confirmPassword")) {
        e.target.style.outline = "1px solid green";
        sessionStorage.setItem(e.target.id, e.target.value);
      }
    } else {
      if (e.target.value.length > 0 && e.target.checkValidity()) {
        sessionStorage.setItem(e.target.id, e.target.value);
        e.target.style.outline = "1px solid green";
      } else if (e.target.value.length === 0) {
        e.target.style.outline = "none";
        sessionStorage.removeItem(e.target.id);
      } else {
        e.target.style.outline = "1px solid red";
        sessionStorage.removeItem(e.target.id);
      }
    }
  };
 

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <button onClick={props.onCollapse} className={classes.icon}>
          <FontAwesomeIcon icon={faCircleChevronUp} />{" "}
        </button>

        <form onInput={validate} onChange={props.btnEnabler} className={classes.form}>
          <Info />
          <Data />
          <div className={classes.passwordField}>
            <Password />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
