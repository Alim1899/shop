import React, { useRef } from "react";
import classes from "./Info.module.css";
import Fullname from "./Fullname/Fullname";
const Info = () => {
  const emailInput = useRef();
  const dayInput = useRef();
  const monthInput = useRef();
  const yearInput = useRef();
  const calculate = (e) => {
    const now = new Date();
    const userDate = new Date(
      yearInput.current.value,
      monthInput.current.value - 1,
      dayInput.current.value
    );
    let yyyy = now.getFullYear() - userDate.getFullYear();
    let mm = now.getMonth() - userDate.getMonth();
    let dd = now.getDate() - userDate.getDate();
    if (dd < 0) {
      dd = 31 - Math.abs(dd);
      mm = mm - 1;
    }

    if (mm < 0) {
      mm = 12 - Math.abs(mm);
      yyyy = yyyy - 1;
    }

    if (yyyy > 18) {
      sessionStorage.setItem("Age", "Adult");
    } else {
      sessionStorage.setItem("Age", "Kid");
    }
  };

  return (
    <div>
      <Fullname />
      <label htmlFor="age">
        Birth date
        <div onInput={calculate} className={classes.age}>
          <input
            placeholder="dd"
            min="1"
            max="31"
            type="number"
            id="birthday"
            ref={dayInput}
          ></input>
          <input
            placeholder="mm"
            min="1"
            max="12"
            id="birthmonth"
            type="number"
            ref={monthInput}
          ></input>
          <input
            placeholder="yyyy"
            min="1900"
            max="2010"
            id="birthyear"
            type="number"
            ref={yearInput}
          ></input>
        </div>{" "}
      </label>

      <select id="gender" className={classes.select}>
        <option id="gender" disabled>
          Gender
        </option>
        <option id="gender" value="Unisex">
          Prefer not to say
        </option>
        <option id="gender">Male</option>
        <option id="gender">Female</option>
      </select>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        title="Invalid email address"
        placeholder="example@example.com"
        type="email"
        ref={emailInput}
      ></input>
    </div>
  );
};

export default Info;
