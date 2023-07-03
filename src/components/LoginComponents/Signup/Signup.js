import React from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";

const Signup = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <form onChange={props.btnEnabler} className={classes.form}>
          <Password />
        </form>
      </div>
    </div>
  );
};

export default Signup;
