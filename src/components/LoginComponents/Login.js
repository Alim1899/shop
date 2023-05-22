import React, { useRef, useEffect, useState, useCallback } from "react";
import classes from "./Login.module.css";
import codes from './CountryCodes.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const nameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  const numberInput = useRef();
  const [dataArrived, setDataArrived] = useState(false);
 
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState();
  const [list, showList] = useState(false);
  const [mergedList, setMergedList] = useState([]);





 

  const selectCountry = (e) => {
    e.preventDefault();

     if (!country) setCountry(e.currentTarget.childNodes[0].childNodes[0].src);
    setOpen(false);
    showList(false);
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
    showList(!list);
  };

  const fetchData = useCallback(async () => {
    await fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => {
        const full = [];
       console.log(mergedList);
        codes.forEach((el) => {
          
          data.forEach((code)=>{
            
            if(el.name===code.name.common){
              full.push({
                name:code.name.common,
                src:code.flags.svg,
                alt:code.flags.alt,
                dial:el.dial_code,
                code:el.code
              })

            }

          })
       });
        setMergedList(full);
        console.log(mergedList);
        setDataArrived(true);
       
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className={classes.main}>
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

            <div className={classes.drop}>
              <button className={classes.dropBtn} onClick={handleMenu}>
                Choose your country <FontAwesomeIcon icon={faCaretDown} />
              </button>

              {list && (
                <ul className={classes.menu}>
                  {dataArrived &&
                    open &&
                    mergedList.map((el) => (
                      <li
                        onClick={selectCountry}
                        key={Math.random()}
                        className={classes.item}
                      >
                        <button disabled>
                          <img
                            className={classes.flag}
                            src={el.src}
                            alt={el.alt}
                          ></img>
                        </button>
                        <h6 className={classes.name}>{el.name}</h6>
                        <h6 className={classes.code}>{el.dial}</h6>
                      </li>
                    ))}
                </ul>
              )}
            </div>
            {country && (
              <div className={classes.number}>
                
                <label htmlFor="number">Mobile Number:</label>
                <img src={country.src} alt={country.alt}></img>
                <input id="number" type="number" ref={numberInput}></input>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
