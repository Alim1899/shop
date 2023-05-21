import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
import LoginPopup from "../components/LoginComponents/LoginPopup";
import Cart from "../components/Cart/Cart";
const Navbar = () => {
  const [loginPopup, showPopup] = useState(false);
  const [cart, showCart] = useState(false);
  const [count, setcount] = useState(0)

  const showPopupHandler = (e) => {
    e.preventDefault();
    showPopup(!loginPopup);
  };
  const cartPopupHandler = (e)=>{
    e.preventDefault();
    showCart(!cart);
    //Removal
    setcount(1)
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img alt="logo" src={logo}></img>
      </div>
      <div className={classes.icons}>
        <div className={classes.searchbar}>
          <input type="text"></input>
          <button className={classes.cart} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          
        </div>
        <div className={classes.cartDiv} onClick={cartPopupHandler}>
<button  className={classes.cart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
          <h6 className={classes.count}>{count}</h6>
        </div>
        
        {cart && <div className={classes.cartItems}>
          <Cart/>
        </div>}

        {loginPopup && (
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
