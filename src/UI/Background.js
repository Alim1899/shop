import React from 'react'
import background from "../assets/hike.jpeg";
import classes from './Background.module.css';

 const Background = () => {
  return (
    <div className={classes.background}>
    <img alt="background" src={background}></img>
  </div>
  )
}
export default Background;
