import React from "react";
import classes from "./Login.module.css";
import Button from '../../Button/Submit'
import Navbar from "../../../../UI/Layout/Navbar";
import Footer from '../../../Footer/Footer'
const Login = () => {
  return (
    <div>
      <Navbar />
      <form className={classes.form}>
        <label htmlFor="email">Email or phone number</label>
        <input
          id="email"
          className={classes.emailInput}
          placeholder="Email or number"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={classes.passInput}
          placeholder="Email or number"
        ></input>
        <Button>Login</Button>
      </form>
<Footer/>
    </div>
  );
};

export default Login;
