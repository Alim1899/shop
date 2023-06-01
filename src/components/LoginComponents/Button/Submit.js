import React from 'react'
import classes from './Submit.module.css'
const Submit = (props) => {
  return (
    <div  className={`${classes.submit} ${props.className}`}><button disabled={props.disabled} onClick={props.onSend}>{props.children}</button></div>
    
  )
}

export default Submit