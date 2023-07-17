import React from 'react'
import background from "../../assets/hike.jpeg";

import classes from "./Content.module.css"
const Background = () => {
  return (
    <div className={classes.background}>
      <div className={classes.back}>
        <img alt="background" src={background}></img>
       
      </div>
    </div>
  )
}

export default Background;