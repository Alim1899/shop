import React, { useState } from "react";
import background from "../../assets/hike.jpeg";
import Home from "./Home";
import SignHandler from "../../components/LoginComponents/Data/SignHandler";
import LoginHandler from "../../components/LoginComponents/Data/LoginHandler";
import classes from "./Background.module.css";
import ErrorPage from "./ErrorPage";

const Background = () => {
  const [homePage, setHomePage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const pageHandler = () => {
    if (window.location.pathname === "/") {
      setHomePage(true);
      setSignupPage(false);
      setLoginPage(false);
      setErrorPage(false);
      console.log(window.location.pathname);
      return;
    } else if (window.location.pathname === "/signup") {
      setSignupPage(true);
      setHomePage(false);

      setLoginPage(false);
      setErrorPage(false);

      console.log(window.location.pathname);
      return;
    } else if (window.location.pathname === "/login") {
      setLoginPage(true);
      setHomePage(false);
      setSignupPage(false);

      console.log(window.location.pathname);
      return;
    } else {
      setErrorPage(true);
    }
  };
  return (
    <div onLoad={pageHandler} className={classes.background}>
      <div className={classes.back}>
        <img alt="background" src={background}></img>
        <div>
          {homePage && <Home />}
          {signupPage && <SignHandler />}
          {loginPage && <LoginHandler />}
          {errorPage&&<ErrorPage/> }
        </div>
      </div>
    </div>
  );
};
export default Background;
