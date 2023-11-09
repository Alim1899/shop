import classes from "./Number.module.css";
import flag from '../../../../assets/usflag.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const Number = (props) => {

  return (
    <div className={classes.contact}>
      <div className={classes.drop}>
        <button
          className={classes.dropBtn}
          type="button"
          onClick={props.handleMenu}
        >
          Choose Another Country{" "}
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
                  <button type="button" disabled>
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
      {props.country?
        <div className={classes.number}>
          <label>Mobile Number</label>
          <div className={classes.input}>
            <img
              src={props.country.src}
              className={classes.selected}
              onClick={props.handleMenu}
              alt={props.country.alt}
            ></img>
            <h5 className={classes.countryCode}>{props.country.code}</h5>
            <div className={classes.inputNumber}>
            {props.children}
            </div>
          </div>
        </div>:
        <div className={classes.number}>
        <label>Mobile Number</label>
          <div className={classes.input}>
            <img
              src={flag}
              className={classes.selected}
              onClick={props.handleMenu}
              alt='CountryLogo'
            ></img>
            <h5 className={classes.countryCode}>+1</h5>
            <div className={classes.inputNumber}>
            {props.children}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Number;
