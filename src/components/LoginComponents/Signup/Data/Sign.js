import Signup from "../Signup";
import React, {useState} from "react";
import Submit from "../../Button/Submit";
import classes from './Sign.module.css';
const Sign = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);


    const sendData = async (e) => {
        e.preventDefault();
        let obj = Object.keys(sessionStorage).reduce(function (obj, key) {
          obj[key] = sessionStorage.getItem(key);
          return obj;
        }, {});
        console.log(JSON.stringify(obj));
        const response = await fetch(
          "https://hikemart-2877b-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
      };

      const btnEnabler = () => {
        if (
          sessionStorage.getItem("name") &&
          sessionStorage.getItem("lastname") &&
          sessionStorage.getItem("email") &&
          sessionStorage.getItem("number") &&
          sessionStorage.getItem("password") &&
          sessionStorage.getItem("confirmPassword")
        ) {
          setIsDisabled(false);
        } else {
          setIsDisabled(true);
        }
      };
  return (
    <div className={classes.sign}>
      <Signup onCollapse={props.onCollapse} btnEnabler={btnEnabler}/>
      <Submit
            onSend={sendData}
            className={classes.btn}
            disabled={isDisabled}
          >
            SIGN
          </Submit>
    </div>
  );
};

export default Sign;
