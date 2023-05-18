import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img alt="logo" src={logo}></img>
      </div>
      <div className={classes.icons}>
      <div className={classes.searchbar}>
      <input type="text"></input>
        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        
      </div>
      
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Navbar;
