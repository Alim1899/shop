import React from "react";
import Background from "./Background";
import classes from "./Layout.module.css";
import Popup from "./Popup";
import Navbar from "./Navbar";

import Footer from "../../components/Footer/Footer";
const Layout = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.popup}>
        <Popup />
      </div>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <Background />
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
