import classes from "./LoginPopup.module.css";
const LoginPopup = () => {
  return (
    <div className={classes.section}>
      <a href="login" id="login" name="login" className={classes.login}>
        Log in{" "}
      </a>

      <p className={classes.quest}>New customer?</p>
      
      <a href="signup" id="signup" className={classes.sign} name="signup">
        Create account
      </a>
    </div>
  );
};

export default LoginPopup;
