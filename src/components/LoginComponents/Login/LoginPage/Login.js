import { useRef } from "react";
import classes from "./Login.module.css";

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
          required
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
          required
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
      </form>
    </div>
  );
};

export default Login;
