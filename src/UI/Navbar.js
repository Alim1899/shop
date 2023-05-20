import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
import LoginPopup from "../components/LoginComponents/LoginPopup";
const Navbar = () => {
  const [popup, showPopup] = useState(false);

  const showPopupHandler = (e) => {
    e.preventDefault();
    showPopup(!popup);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img alt="logo" src={logo}></img>
      </div>
      <div className={classes.icons}>
        <div className={classes.searchbar}>
          <input type="text"></input>
          <button className={classes.acc} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {popup && (
          <div className={classes.popup}>
            <LoginPopup />
          </div>
        )}
        <button onClick={showPopupHandler} className={classes.acc}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
