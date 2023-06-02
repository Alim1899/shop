import React from "react";
import classes from "./Login.module.css";
import Button from "../../Button/Submit";

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
          <button className={classes.create}>Create now</button>
        </div>
        <Button className={classes.btn}>LOGIN</Button>
      </form>
    </div>
  );
};

export default Login;
