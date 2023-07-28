import classes from "./LoginPopup.module.css";
const LoginPopup = (props) => {
  return (
    <div className={classes.section}>
    {!props.isLoggedIn&& <div className={classes.parent}>
      <a href="login" id="login" name="login" className={classes.login}>
        Log in{" "}
      </a>

      <p className={classes.quest}>New customer?</p>
      
      <a href="signup" id="signup" className={classes.sign} name="signup">
        Create account
      </a>
    </div>}
    {props.isLoggedIn&&<div className={classes.logout}><button onClick={props.logout}>Log Out</button></div>}
      
    </div>
  );
};

export default LoginPopup;
