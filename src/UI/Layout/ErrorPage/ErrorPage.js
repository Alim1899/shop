import React from "react";
import classes from "./ErrorPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons"
const ErrorPage = () => {
  return (
    <div className={classes.page}>
    <div>
       <h1>Oooopsss.....</h1>
      <p>Something went wrong</p>
      <span>return to main page:<a href="/"><FontAwesomeIcon icon={faHouse} /></a></span>
    </div>
     
    </div>
  );
};

export default ErrorPage;
