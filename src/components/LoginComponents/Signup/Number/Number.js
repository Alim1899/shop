import React, { useRef } from "react";
import classes from "./Number.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const Number = (props) => {
  const numberInput = useRef();

  return (
    <div className={classes.contact}>
      <div className={classes.drop}>
        <button className={classes.dropBtn} onClick={props.handleMenu}>
          Choose your country{" "}
          <FontAwesomeIcon icon={props.open ? faCaretUp : faCaretDown} />
        </button>

        {props.list && (
          <ul className={classes.menu}>
            {props.dataArrived &&
              props.open &&
              props.mergedList.map((el) => (
                <li
                  onClick={props.selectCountry}
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
      {props.country && (
        <div className={classes.number}>
          <label htmlFor="number">
            <h5>Mobile number:</h5>
          </label>
          <div className={classes.input}>
            <img
              src={props.country.src}
              className={classes.selected}
              onClick={props.handleMenu}
              alt={props.country.alt}
            ></img>
            <h5 className={classes.countryCode}>{props.country.code}</h5>
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
  );
};

export default Number;
