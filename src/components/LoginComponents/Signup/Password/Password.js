import { useState, useRef, useEffect, useCallback } from "react";
import classes from "./Password.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";


const Password = (props) => {
  const password = useRef();
  const confirmPassword = useRef();
  const [passwordFieldCompleted, setPasswordFieldCompleted] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");

  const passwordCompletehandler = useCallback(() => {
    if (pass.length > 3) setPasswordFieldCompleted(true);
    if (pass.length <= 3) setPasswordFieldCompleted(false);
    
  }, [pass.length]);

  const passwordHandler = (e) => {
    setPass(password.current.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(confirmPassword.current.value);
  };

  useEffect(() => {
    passwordCompletehandler();
  }, [pass, passwordCompletehandler]);
  return (
    <div
      className={classes.pass}
      onInput={passwordCompletehandler}
      onChange={passwordFieldCompleted ? props.passwordHandler : null}
    >
      <div className={classes.password}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          ref={password}
          onChange={passwordHandler}
          id="password"
          minLength={8}
          value={pass}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must include at least one letter and one number"
          placeholder="Min.8 symbol"
        ></input>
        {/* <FontAwesomeIcon
          
          icon={faEye}
        /> */}
      </div>
      <div className={classes.confirmPass}>
        <label htmlFor="confirmpassword">Confirm password</label>
        <input
          type="password"
          ref={confirmPassword}
          onChange={confirmPasswordHandler}
          id="confirmPassword"
          minLength={8}
          title="Must match with password field"
          value={confirmPass}
          placeholder="Min.8 symbol"
        ></input>
      </div>
    </div>
  );
};

export default Password;
