import React, { useState } from "react";
import classes from "./LoginPopup.module.css";
import Login from "../LoginPage/Login";
import Signup from "../../Signup/Signup";
const LoginPopup = () => {
  const [login, showLogin] = useState(false);
  const [signup, showSignup] = useState(false);
  const showLoginHandler = (e) => {
      showLogin(!login);
      showSignup(false);
    
  };
  const showSignupHandler = (e) => {    

      showSignup(!signup);
    
  };

  return (
    <div className={classes.section}>
      <button onClick={showLoginHandler} name="login" className={classes.login}>
        Sign In{" "}
      </button>
      
      
        <div className={classes.loginPage}>
        
          {login &&<Login onCollapse={showLoginHandler}/>}
        </div>
      
      <p className={classes.quest}>New customer?</p>
      <button onClick={showSignupHandler} className={classes.sign} name="signup">
        Create account
      </button>
      <div className={classes.signupPage}>
          {signup && <Signup onCollapse={showSignupHandler} />}
        </div>
    </div>
  );
};

export default LoginPopup;
