import { useState, useRef } from "react";
import classes from "./Password.module.css";

const Password = (props) => {
  const password = useRef();
  const confirmPassword = useRef();
  const [passwordFieldCompleted, setPasswordFieldCompleted] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");

  const passwordCompletehandler = (e) => {
    if(pass.length>3)setPasswordFieldCompleted(true);
    if(pass.length<=3)setPasswordFieldCompleted(false);
  };
  const passwordHandler = (e) => {
    setPass(password.current.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(confirmPassword.current.value);
  };
  return (
    <div className={classes.pass} onInput={passwordCompletehandler}  onChange={passwordFieldCompleted? props.passwordHandler:null}>
      <div className={classes.password}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          ref={password}
          onChange={passwordHandler}
          id="password"
          minLength={8}
          value={pass}
          placeholder="Min.8 symbol"
        ></input>
      </div>
      <div className={classes.confirmPass}>
        <label htmlFor="confirmpassword">Password</label>
        <input
          type="password"
          ref={confirmPassword}
          onChange={confirmPasswordHandler}
          id="confirmPassword"
          minLength={8}
          value={confirmPass}
          placeholder="Min.8 symbol"
        ></input>
      </div>
    </div>
  );
};

export default Password;
