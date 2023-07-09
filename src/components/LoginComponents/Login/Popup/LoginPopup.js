import classes from "./LoginPopup.module.css";

const LoginPopup = () => {
  const pathHandler = (e)=>{
    window.location.pathname=e.target.id;
  }
  return (
    <div className={classes.section}>
      <button onClick={pathHandler} id="login" name="login" className={classes.login}>
        Log in{" "}
      </button>
      <p className={classes.quest}>New customer?</p>
      <button onClick={pathHandler}  id="signup" className={classes.sign} name="signup">
        Create account
      </button>
    </div>
  );
};

export default LoginPopup;
