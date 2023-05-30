import React from "react";
import classes from "./Login.module.css";
import Button from "../../Button/Submit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
const Login = (props) => {
  return (
    <div className={classes.login}>
      <form className={classes.form}>
        <label htmlFor="email">Email or phone number</label>
        <input
          id="email"
          className={classes.emailInput}
          placeholder="Email or number"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={classes.passInput}
          placeholder="Email or number"
        ></input>
        <div className={classes.newAcc}>
          <p>Don't have an account?</p>
          <button> create now</button>
        </div>
        <Button className={classes.btn}>LOGIN</Button>
        <button type="button" onClick={props.onCollapse} className={classes.collapse}>
          <FontAwesomeIcon icon={faCircleChevronUp} />
        </button>
      </form>
    </div>
  );
};

export default Login;
