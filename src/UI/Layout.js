import React from "react";
import background from "../assets/hike.jpeg";
import classes from "./Layout.module.css";
import Popup from "./Popup";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <div className={classes.popup}>
        <Popup />
      </div>
      <Navbar/>

      <div className={classes.background}>
        <img alt="background" src={background}></img>
      </div>
    </div>
  );
};
export default Layout;
