import React from 'react'
import logo from "../assets/logo.png";
import classes from './Navbar.module.css'
 const Navbar = () => {
  return (
    <div className={classes.logo}>
    <img alt="logo" src={logo}></img>
  </div>
  )
}

export default Navbar;