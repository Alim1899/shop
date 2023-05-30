import React, {useState} from "react";
import classes from "./LoginPopup.module.css";
import Login from "../LoginPage/Login";
const LoginPopup = () => {
  const [login, showLogin] = useState(false);
  const showLoginHandler = e =>{
    showLogin(!login);
    console.log('Login ');
  }
  return (
    <div className={classes.section}>
        <button onClick={showLoginHandler} className={classes.login}>Sign In </button>
        {login&&<div className={classes.loginPage}><Login onCollapse={showLoginHandler}/></div>}
        <p className={classes.quest}>New customer?</p>
        <button className={classes.sign}>Create account</button>
      
    </div>
  );
};

export default LoginPopup;
