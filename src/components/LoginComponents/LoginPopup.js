import React from 'react'
import classes from './LoginPopup.module.css';

const LoginPopup = () => {
  return (
    <div className={classes.section}>
    <div><button>Sign Up</button><p>or, Already have an Acoount?</p> <button>Login</button></div>
        
    </div>
  )
}

export default LoginPopup;