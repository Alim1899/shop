import Login from "../Login/Login";
import classes from "./LoginHandler.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
const LoginHandler = (props) => {
  const [rightUserDetails, setRightUserDetails] = useState(false);
  const [wrongUserDetails, setWrongUserDetails] = useState(false);
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

    for (let i = 0; i < registeredUsers.length; i++) {
      
      console.log(i);
      if (
        enteredUser[0].email === registeredUsers[i].email &&
        enteredUser[0].password === registeredUsers[i].password
      ) {
        console.log("succes");
        console.log(
          enteredUser[0].email === registeredUsers[i].email &&
            enteredUser[0].password === registeredUsers.password
        );
        setRightUserDetails(true);
        return;
      } else {
        console.log("wrong");
        setWrongUserDetails(true);
        
        if(rightUserDetails) setWrongUserDetails(false);
      }
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
      {wrongUserDetails&&!rightUserDetails && (
        <div className={classes.error}>
          <h2>Please enter correct account details</h2>

          <button
            className={classes.close}
            onClick={() => setWrongUserDetails(false)}
          >
            {" "}
            <FontAwesomeIcon icon={faCaretDown} />
            <h6>Close</h6>
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginHandler;
