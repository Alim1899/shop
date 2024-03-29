import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
import LoginPopup from "../../components/LoginComponents/Popup/LoginPopup";
import Cart from "../../components/Cart/Cart";
const Navbar = (props) => {
  const [loginPopup, showPopup] = useState(false);
  const [cart, showCart] = useState(false);
  const [count, setcount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const showPopupHandler = (e) => {
    e.preventDefault();
    showCart(false);
    showPopup(!loginPopup);
  };
  const cartPopupHandler = (e) => {
    e.preventDefault();
    showCart(!cart);
    showPopup(false);
    //Removal
    setcount(1);
  };
  const logout = (e) => {
    setIsLoggedIn(false);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <a href="/">
          <img alt="logo" className={classes.logoImg} src={logo}></img>
        </a>
      </div>
      <div className={classes.icons}>
        <div className={classes.searchbar}>
          <input title="Search" type="text"></input>
          <button className={classes.cart} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={classes.sell}>
        {isLoggedIn && <a href="/sell" title="Add item" className={classes.sellbtn}><FontAwesomeIcon icon={faCirclePlus} /></a>}

        
        </div>
        <div className={classes.cartDiv} onClick={cartPopupHandler}>
          <button className={classes.cart} title="Shopping cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <h6 className={classes.count}>{count}</h6>
        </div>

        {cart && (
          <div className={classes.cartItems}>
            <Cart />
          </div>
        )}
        <div className={classes.user}>
          {loginPopup && (
            <div className={classes.popup}>
              <LoginPopup isLoggedIn={isLoggedIn} logout={logout} />
            </div>
          )}

          <button onClick={showPopupHandler} title="Log in/out" className={classes.acc}>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
