import React, { useRef } from "react";
import classes from "./Info.module.css";
const Info = () => {
  const nameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  const dayInput = useRef();
  const monthInput = useRef();
  const yearInput = useRef();
  const age = (e) => {
    const today = new Date();
    console.log(today.getMonth());
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Steve"
        minLength={2}
        ref={nameInput}
      ></input>
      <label htmlFor="lastname">lastName</label>
      <input
        id="lastname"
        type="text"
        minLength={2}
        placeholder="Mc Gregory"
        ref={lastnameInput}
      ></input>
      <label htmlFor="age">Birth date
        <div onChange={age} className={classes.age}>
          
          <input placeholder="dd" min='1' max='31' type="number" ref={dayInput}></input>
          <input placeholder="mm" min='1' max='12' type="number" ref={monthInput}></input>
          <input placeholder="yyyy" min='1900' max='2022' type="number"  ref={yearInput}></input>
        </div>{" "}
      </label>
      
      <select className={classes.select}>
      <optgroup label="Gender">
      <option disabled>Gender</option>
         <option >Male</option>
        <option>Female</option>
      </optgroup>
       
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
