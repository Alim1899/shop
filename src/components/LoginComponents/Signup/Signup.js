import React from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";
import Fullname from "./Info/Fullname/Fullname";
import Info from "./Info/Info";
import Data from "./Number/Data/Data";

const Signup = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <form onChange={props.btnEnabler} className={classes.form}>
          <Fullname invalid={classes.invalid} valid={classes.valid} />
          <Info invalid={classes.invalid} valid={classes.valid}/>

          <Data />

          <Password />
        </form>
      </div>
    </div>
  );
};

export default Signup;
