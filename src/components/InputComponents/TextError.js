import React from 'react'
import classes from './Cases.module.css'
const TextError = (props) => {
  return (
    <div className={classes.error}>
    <div className={classes.errorText} >
      {props.children}
    </div>
    </div>
  )
}

export default TextError