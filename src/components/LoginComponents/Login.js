import React, { useRef, useEffect, useState, useCallback } from "react";
import classes from "./Login.module.css";
import Navbar from "../../UI/Layout/Navbar";
const Login = () => {
  const nameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  const numberInput = useRef();
  const [dataArrived, setDataArrived] = useState(false);
  const [names] = useState([]);
  const [open, setOpen] = useState(false);
  const handleMenu = (e) => {
    e.preventDefault()
    setOpen(!open);
  };

  const fetchData = useCallback(async () => {
    await fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.map((el) => {
          return names.push({
            name: el.name.common,
            src: el.flags.svg,
            alt: el.flags.alt,
          });
        });
        setDataArrived(true);
        names.sort();
        console.log(data[0].flags);
        console.log(names);
      });
  }, [names]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.content}>
        <form className={classes.form}>
          <div className={classes.fullname}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" ref={nameInput}></input>
            <label htmlFor="lastname">lastName</label>
            <input id="lastname" type="text" ref={lastnameInput}></input>
          </div>
          <div className={classes.contact}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailInput}></input>
            <label htmlFor="number">Choose your country</label>

            <div className={classes.drop}>
              <button className={classes.dropBtn} onClick={handleMenu}>Handle</button>
              
               
                  <ul className={classes.menu}>

                   {dataArrived && open &&names.map((el) => (
                    <li key={Math.random()} className={classes.item}>
                      <button>
                        <img
                          className={classes.flag}
                          src={el.src}
                          alt={el.alt}
                        ></img>
                        <h6>{el.name}</h6>
                      </button>
                    </li>
                 
                ))}
                </ul>
                
            </div>

            <input id="number" type="number" ref={numberInput}></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
