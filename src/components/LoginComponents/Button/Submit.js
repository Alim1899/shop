import React from 'react'
import classes from './Submit.module.css'
const Submit = (props) => {
  return (
    <div className={`${classes.submit} ${props.className}`} ><button>{props.children}</button></div>
    
  )
}

export default Submit