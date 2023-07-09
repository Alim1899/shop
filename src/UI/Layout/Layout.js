import React, { useState } from "react";
import Background from "./Background";
import classes from "./Layout.module.css";
import Popup from "./Popup";
import Navbar from "./Navbar";
import SignHandler from "../../components/LoginComponents/Data/SignHandler";
import LoginHandler from "../../components/LoginComponents/Data/LoginHandler";
import Footer from "../../components/Footer/Footer";
const Layout = (props) => {
  const [homePage, setHomePage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const pageHandler = () => {
 
    console.log(window.location.pathname);
    if (window.location.pathname === "/") {
      setHomePage(true);
      setSignupPage(false);
      setLoginPage(false);
      return;
    }
    if (window.location.pathname === "/signup") {
      setHomePage(false);
      setSignupPage(true);
      setLoginPage(false);
      return;
    }

    if (window.location.pathname === "/login") {
      setHomePage(false);
      setSignupPage(false);
      setLoginPage(true);
      return;
    }
  };
  return (
    <div onLoad={pageHandler} className={classes.body}>
      <div className={classes.popup}>
        <Popup />
      </div>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      {homePage && <Background />}
      {signupPage && <SignHandler />}
      {loginPage&&<LoginHandler/>}
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
