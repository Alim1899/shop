import React, { useState } from "react";
import SignupForm from "../Signup/Formik/SignupForm";
import classes from "./SignHandler.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const SignHandler = () => {
  const [userIsExist, setUserIsExist] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const sign = async (values) => {
    const emails = [];
    await fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        Object.entries(data).map((el) => emails.push(el[1].email));
      });

    if (emails.includes(values.email)) {
      console.log("THis email exist");
      return;
    } else {
      console.log("Registered");
      await fetch(
        "https://hikemart-2877b-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  };
  return (
    <div>
      <div className={classes.exist}>
        <h2>This email is already registered</h2>
        <h4>Forgot password? restore it <a href="restore">Here</a></h4>
         <button className={classes.close}>
          {" "}
          <FontAwesomeIcon icon={faCaretDown} />
          <h6>Close</h6>
        </button>
      </div>
      <div className={classes.succes}>
        <h2>Succesfully registered new user</h2>
       <h4>Log in to your account</h4>
       <a href="login" className={classes.close}>
          {" "}
          <FontAwesomeIcon icon={faRightToBracket} />
          <h6>Login</h6>
        </a>
      </div>
      <SignupForm sign={sign} />
    </div>
  );
};

export default SignHandler;
