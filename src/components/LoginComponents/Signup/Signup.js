import React, { useState } from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";
import Info from "./Info/Info";
import Submit from "../Button/Submit";
import Data from "./Number/Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const Signup = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  //Helper functions

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
  const btnEnabler = () => {
    if (
      sessionStorage.getItem("name") &&
      sessionStorage.getItem("lastname") &&
      sessionStorage.getItem("email") &&
      sessionStorage.getItem("number") &&
      sessionStorage.getItem("password") &&
      sessionStorage.getItem("confirmPassword")
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const sendData = async (e) => {
    e.preventDefault();
    let obj = Object.keys(sessionStorage).reduce(function (obj, key) {
      obj[key] = sessionStorage.getItem(key);
      return obj;
    }, {});
    console.log(JSON.stringify(obj));
    const response = await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <button onClick={props.onCollapse} className={classes.icon}>
          <FontAwesomeIcon icon={faCircleChevronUp} />{" "}
        </button>

        <form onInput={validate} onChange={btnEnabler} className={classes.form}>
          <Info />
          <Data />
          <div className={classes.passwordField}>
            <Password />
          </div>

          <Submit
            onSend={sendData}
            className={classes.btn}
            disabled={isDisabled}
          >
            SIGN
          </Submit>
        </form>
      </div>
    </div>
  );
};

export default Signup;
