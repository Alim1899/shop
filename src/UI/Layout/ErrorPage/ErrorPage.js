import React from "react";
import classes from "./ErrorPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const ErrorPage = () => {
  return (
    <div className={classes.page}>
      <div>
        <h1>Sorry</h1>
        <p>
          Looks like something went wrong. Page you want not exist or not
          completed yet
        </p>{" "}
        <a href="/">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
