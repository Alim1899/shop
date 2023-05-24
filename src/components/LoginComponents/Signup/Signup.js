import React, { useRef, useEffect, useState, useCallback } from "react";
import classes from "./Signup.module.css";
import Password from "./Password/Password";
import codes from "../CountryCodes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Signup = () => {
  const nameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  const numberInput = useRef();
  const [dataArrived, setDataArrived] = useState(false);
  const [passwordFieldCompleted, setPasswordFieldCompleted ]= useState(false);
  const passwordHandler = (e)=>{
 e.preventDefault();
 setPasswordFieldCompleted(true);
 console.log(passwordFieldCompleted);
}


  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState();
  const [list, showList] = useState(false);
  const [mergedList, setMergedList] = useState([]);

  const selectCountry = (e) => {
    e.preventDefault();
    setCountry(null);

    setCountry({
      src: e.currentTarget.childNodes[0].childNodes[0].src,
      alt: e.currentTarget.childNodes[0].childNodes[0].alt,
      code: e.currentTarget.childNodes[2].childNodes[0].data,
    });
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

        codes.forEach((el) => {
          data.forEach((code) => {
            if (el.name === code.name.common) {
              full.push({
                name: code.name.common,
                src: code.flags.svg,
                alt: code.flags.alt,
                dial: el.dial_code,
                code: el.code,
              });
            }
          });
        });
        setMergedList(full);

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
            <input
              id="name"
              type="text"
              placeholder="Steve"
              ref={nameInput}
            ></input>
            <label htmlFor="lastname">lastName</label>
            <input
              id="lastname"
              type="text"
              placeholder="Mc Gregory"
              ref={lastnameInput}
            ></input>
          </div>
          <div className={classes.contact}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className={classes.email}
              placeholder="example@example.com"
              type="email"
              ref={emailInput}
            ></input>

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
                <label htmlFor="number">
                  <h5>Mobile number:</h5>
                </label>
                <div className={classes.input}>
                  <img
                    src={country.src}
                    className={classes.selected}
                    alt={country.alt}
                  ></img>
                  <h5 className={classes.countryCode}>{country.code}</h5>
                  <input
                    id="number"
                    className={classes.numberInput}
                    type="number"
                    ref={numberInput}
                    min={8}
                    maxLength={15}
                    placeholder="Enter without code"
                  ></input>
                </div>
              </div>
            )}

          </div>
          <div className={classes.passwordField}>
            <Password passwordHandler={passwordHandler}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
