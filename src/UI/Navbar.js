import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img alt="logo" src={logo}>
        </img>

      </div>
      <div className={classes.icons}>
      <div className={classes.searchbar}>
      <input type="text"></input>
        <button className={classes.acc} type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        
      </div>
      
        <button className={classes.acc}><FontAwesomeIcon icon={faUser} /></button>
      </div>
    </div>
  );
};

export default Navbar;
