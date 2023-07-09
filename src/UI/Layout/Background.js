import React,{useState} from "react";
import background from "../../assets/hike.jpeg";
import Home from "./Home";
import SignHandler from "../../components/LoginComponents/Data/SignHandler";
import LoginHandler from "../../components/LoginComponents/Data/LoginHandler";
import classes from "./Background.module.css";

const Background = () => {
  const [homePage, setHomePage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const pageHandler = () => {
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
    <div onLoad={pageHandler} className={classes.background}>
      <div className={classes.back}>
        <img alt="background" src={background}></img>
        <div >
      {homePage && <Home />}
      {signupPage && <SignHandler />}
      {loginPage && <LoginHandler />}
      </div>
      </div>
      
    </div>
  );
};
export default Background;
