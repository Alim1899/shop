import { useEffect, useState } from "react";
import Login from "../Login/LoginPage/Login";
import Submit from "../Button/Submit";
import classes from "./LoginHandler.module.css";
const LoginHandler = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [emailSucces, setEmailSucces] = useState(false);
  const [passwordSucces, setPasswordSucces] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [incorrectDetails, setIncorrectDetails] = useState(false);
  const users = [];
  //Fetching data from firebase
  const fetchData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/emails.json")
      .then((response) => response.json())
      .then((data) => {
        users.push(Object.entries(data));
      });
  };
  fetchData();

  // Validating field inputs
  const validate = (e) => {
    if (e.target.checkValidity()) {
      e.target.style.outline = "1px solid green";
      if (e.target.id === "userName") {
        setEmailSucces(true);
        sessionStorage.setItem("userName", e.target.value);
      } else if (e.target.id === "userPassword") {
        sessionStorage.setItem("userPassword", e.target.value);
        setPasswordSucces(true);
      }
    } else {
      e.target.style.outline = "1px solid red";
      if (e.target.id === "userName") {
        sessionStorage.removeItem("userName");
        setEmailSucces(false);
      } else if (e.target.id === "userPassword") {
        sessionStorage.removeItem("userPassword");

        setPasswordSucces(false);
      }
    }
  };

  useEffect(() => {
    if (emailSucces && passwordSucces) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailSucces, passwordSucces]);

  const loginHandler = (e) => {
    for (let i = 0; i < users[0].length; i++) {
      if (
        users[0][i][1].email === sessionStorage.getItem("userName") &&
        users[0][i][1].password === sessionStorage.getItem("userPassword")
      ) {
        setLoggedIn(true);
        setIncorrectDetails(false);
      } else {
        setLoggedIn(false);
        setIncorrectDetails(true);
        setTimeout(() => {
          setIncorrectDetails(false);
        }, 1500);
      }
    }
  };
  return (
    <div>
      <Login onValidate={validate} disabled={disabled} />
      {loggedIn && (
        <p className={classes.msg}>Succesfully logged in</p>
      )} 
      { incorrectDetails&& (
        <p className={classes.msg}>Email or password incorrect</p>
      )}

      <Submit onSend={loginHandler} disabled={disabled}>
        LOGIN
      </Submit>
    </div>
  );
};

export default LoginHandler;
