import React from "react";
import Layout from "../Layout";
import Signup from "../../../components/LoginComponents/Signup/Signup";
import {  Routes, Route } from "react-router-dom";
import Login from "../../../components/LoginComponents/Login/LoginPage/Login";
const Links = () => {
  return (
    
      <main>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    
  );
};

export default Links;
