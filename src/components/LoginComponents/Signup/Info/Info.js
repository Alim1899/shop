import React, {useRef} from 'react'
import classes from './Info.module.css'
const Info = () => {
    const nameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  return (
    <div className={classes.fullname}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Steve"
              ref={nameInput}
            ></input>
            <label htmlFor="lastname">lastName</label>
            <input
              id="lastname"
              type="text"
              placeholder="Mc Gregory"
              ref={lastnameInput}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className={classes.email}
              placeholder="example@example.com"
              type="email"
              ref={emailInput}
            ></input>
          </div>
  )
}

export default Info