import Login from "../Login/Login";
import classes from "./LoginHandler.module.css";
import { useState } from "react";
const LoginHandler = (props) => {
  const [rightUserDetails, setRightUserDetails] = useState(false);
  //Fetching data from firebase
  const fetchData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(Object.entries(data));
      });
  };
  // fetchData();

  const enteredDetails = async (values) => {
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
    const enteredUser = [];
    await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/enters.json"
    )
      .then((response) => response.json())
      .then((data) => {
        Object.entries(data).map((el) => enteredUser.push(Object.entries(el)[1][1]));
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
    console.log(enteredUser);
  };

  return (
    <div className={classes.loginPage}>
      <Login login={enteredDetails} />
    </div>
  );
};

export default LoginHandler;
