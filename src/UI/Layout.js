import React from "react";
import Background from "./Background";
import classes from "./Layout.module.css";
import Popup from "./Popup";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <div className={classes.popup}>
        <Popup />
      </div>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.background}>
        <Background/>
      </div>

     
    </div>
  );
};
export default Layout;
