import Signup from "../Signup";
import React, { useState } from "react";
import Submit from "../../Button/Submit";
const Sign = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [signedUser, setSignedUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const sendData = () => {
    let obj = Object.keys(sessionStorage).reduce(function (obj, key) {
      obj[key] = sessionStorage.getItem(key);
      return obj;
    }, {});

    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/emails.json", {
      method: "POST",
      body: JSON.stringify(obj.email),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const emails = [];
  const getData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          Object.entries(data).forEach((el) => {
            emails.push(el[1].email);
            
          });
        }
      });
  };
  
  getData();

  const checkEmail = (e) => {
    if(emails.includes(sessionStorage.getItem('email'))){
      setSignedUser(true);
    }else{
      sendData();
      setNewUser(true)
    }
    setTimeout(() => {
      setSignedUser(false);
      
    }, 1500);
  };


  const btnEnabler = () => {
    if (
      sessionStorage.getItem("name") &&
      sessionStorage.getItem("lastname") &&
      sessionStorage.getItem("email")
      // &&
      // sessionStorage.getItem("number") &&
      // sessionStorage.getItem("password") &&
      // sessionStorage.getItem("confirmPassword")
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div>
      <Signup btnEnabler={btnEnabler} />
      {signedUser && (
        <p className={props.error}>This email already registered</p>
      )}
      {newUser && (
        <p className={props.succes}>Succesfully created a new account <button id='succes' onClick={props.onLogin}>LOGIN</button></p>
       

      )}

      <Submit onSend={checkEmail} disabled={isDisabled}>
        SIGN
      </Submit>
    </div>
  );
};

export default Sign;
