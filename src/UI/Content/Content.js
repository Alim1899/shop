import React, { useState } from "react";
import background from "../../assets/hike.jpeg";
import Home from "../../components/Home/Home";
import SignHandler from "../../components/LoginComponents/Data/SignHandler";
import LoginHandler from "../../components/LoginComponents/Data/LoginHandler";
import classes from "./Content.module.css";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";

const Content = () => {
  const [homePage, setHomePage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const pageHandler = () => {};
  return (
    <div onLoad={pageHandler} className={classes.background}>
      <div className={classes.back}>
        <img alt="background" src={background}></img>
        <div className={classes.content}>
          <ErrorPage />
        </div>
      </div>
    </div>
  );
};
export default Content;
