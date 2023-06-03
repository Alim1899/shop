import React from 'react'
import Login from '../Login/LoginPage/Login'
const LoginHandler = (props) => {
  return (
    <div><Login handler={props.handler}/></div>
  )
}

export default LoginHandler