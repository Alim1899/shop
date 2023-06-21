import { useRef } from "react";


const Fullname = (props) => {
    
    const lastname = useRef();
  return (
    <div onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
        className={props.className}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Steve"
        minLength={2}
        
        
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