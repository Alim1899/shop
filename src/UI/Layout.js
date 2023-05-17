import React from "react";
import logo from "../assets/logo.png";
import background from "../assets/hike.jpeg";
import classes from "./Layout.module.css";
const Layout = () => {
  return (
    <div>
      <div className={classes.about}>
        <h6>
          $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE
          BAG WITH PURCHASES $250+.
        </h6>
        <button type="button">X</button>
      </div>
      <div className={classes.logo}>
        <img alt="logo" src={logo}></img>
        
      </div>
      <div className={classes.background}>
        <img alt="background" src={background}></img>
      </div>
    </div>
  );
};
export default Layout;
