import { useState } from "react";
import Login from "../Login/LoginPage/Login";
const LoginHandler = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [emailSucces, setEmailSucces] = useState(false);
  const [passwordSucces, setPasswordSucces] = useState(false);
  const userData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(Object.entries(data));
      });
  };
  userData();

  const validate = (e) => {
    if (emailSucces && passwordSucces) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    console.log(disabled);
    if (e.target.checkValidity()) {
      e.target.style.outline = "1px solid green";
      if (e.target.id === "userName") setEmailSucces(true);
      if (e.target.id === "userPassword") setPasswordSucces(true);
    } else {
      e.target.style.outline = "1px solid red";
      if (e.target.id === "userName") setEmailSucces(false);
      if (e.target.id === "userPassword") setPasswordSucces(false);
    }

    if (emailSucces && passwordSucces) {
    setDisabled(false);
  } else {
    setDisabled(true);
  }
  };

  

  return (
    <div>
      <Login onValidate={validate} disabled={disabled} />
    </div>
  );
};

export default LoginHandler;
