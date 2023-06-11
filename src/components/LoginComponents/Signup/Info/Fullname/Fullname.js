import { useRef } from "react";


const Fullname = () => {
    const name = useRef();
    const lastname = useRef();
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Steve"
        minLength={2}
        ref={name}
      ></input>
      <label htmlFor="lastname">lastName</label>
      <input
        id="lastname"
        type="text"
        minLength={2}
        placeholder="Mc Gregory"
        ref={lastname}
      ></input></div>
  )
}

export default Fullname