import { useRef } from "react";
import classes from "./Login.module.css";
import Button from "../../Button/Submit";

const Login = (props) => {
  const userName = useRef();
  const userPassword = useRef();

  return (
    <div className={classes.login}>
      <form onInput={props.onValidate} className={classes.form}>
        <label htmlFor="email">Email</label>
        <input
          id="userName"
          className={classes.emailInput}
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
          placeholder="example@example.com"
          type="email"
          ref={userName}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="userPassword"
          minLength={8}
          ref={userPassword}
          className={classes.passInput}
          placeholder="Min.8 symbol"
        ></input>
        <div className={classes.newAcc}>
          <p>Don't have an account?</p>
          <button
            id="create"
            onClick={props.handler}
            className={classes.create}
          >
            Create now
          </button>
        </div>
        <Button className={classes.btn} disabled={props.disabled}>
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default Login;
