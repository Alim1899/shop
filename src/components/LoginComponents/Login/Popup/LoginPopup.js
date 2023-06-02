import React, { useState } from "react";
import classes from "./LoginPopup.module.css";
import Login from "../LoginPage/Login";
import Sign from "../../Signup/Data/Sign";
const LoginPopup = () => {
  const [login, showLogin] = useState(false);
  const [signup, showSignup] = useState(false);
  const showLoginHandler = (e) => {
      showLogin(!login);
      showSignup(false);
      sessionStorage.clear();
  };
  const showSignupHandler = (e) => {    

      showSignup(!signup);
      sessionStorage.clear();
    
  };

  return (
    <div className={classes.section}>
      <button onClick={showLoginHandler} name="login" className={classes.login}>
        Log in{" "}
      </button>
      
      
        <div className={classes.loginPage}>
        
          {login &&<Login onCollapse={showLoginHandler}/>}
          {signup && <Sign onCollapse={showSignupHandler} />}
        </div>
      
      <p className={classes.quest}>New customer?</p>
      <button onClick={showSignupHandler} className={classes.sign} name="signup">
        Create account
      </button>
      <div className={classes.signupPage}>
          
        </div>
    </div>
  );
};

export default LoginPopup;
