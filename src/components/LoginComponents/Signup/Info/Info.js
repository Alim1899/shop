import React, { useRef } from "react";
const Info = () => {
  const nameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
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
      <label htmlFor="email">Email</label>
      <input
        id="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="Invalid email address"
        placeholder="example@example.com"
        type="email"
        ref={emailInput}
      ></input>
    </div>
  );
};

export default Info;
