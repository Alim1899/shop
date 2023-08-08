import Login from "../Login/Login";
import classes from "./LoginHandler.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const LoginHandler = (props) => {
  const [rightUserDetails, setRightUserDetails] = useState(false);
  //Fetching data from firebase
  const enteredUser = [];
  const registeredUsers = [];
  const fetchData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        Object.entries(data).map((el) => registeredUsers.push(el[1]));
      });
  };
  fetchData();

  const handleEnteredDetails = async (values) => {
    await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/enters.json",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/enters.json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) enteredUser.pop();
        Object.entries(data).map((el) =>
          enteredUser.push(Object.entries(el)[1][1])
        );
      });
    await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/enters.json",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (enteredUser.length > 0) {
      registeredUsers.every((el) => {
        if (
          enteredUser[0].email === el.email &&
          enteredUser[0].password === el.password
        ) {
          console.log("User matches");
          setRightUserDetails(true);
          return false;
        } else {
          console.log("User not match");
          return false;
        }
      });
    }
  };

  return (
    <div className={classes.loginPage}>
      <Login login={handleEnteredDetails} />
      {rightUserDetails && (
        <div className={classes.succes}>
          <h2>You entered right user details</h2>
          <h4>Go to your account</h4>
          <a href="login" className={classes.close}>
            {" "}
            <FontAwesomeIcon icon={faRightToBracket} />
            <h6>Browse</h6>
          </a>
        </div>
      )}
    </div>
  );
};

export default LoginHandler;
