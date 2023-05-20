import React from "react";
import Background from "./Background";
import classes from "./Layout.module.css";
import Popup from "./Popup";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className={classes.body}>
      <div className={classes.popup}>
        <Popup />
      </div>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.background}>
        <Background/>
      </div>
      <div className={classes.footer}>
        <Footer/>
      </div>

     
    </div>
  );
};
export default Layout;
