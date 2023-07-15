import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonHalfDress,
  faPersonDress,
  faPerson,
  faChildren,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Home.module.css";
import ImageSlider from "./Slider/Slider";
const Home = () => {
  return (
    <div>
      <div className={classes.back}>
        {" "}
        <div className={classes.shop}>
          <button>
            <FontAwesomeIcon icon={faPerson} />
            <span>Man</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faPersonDress} />
            <span>Woman</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faChildren} />
            <span>Kid's</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faPersonHalfDress} />
            <span>Unisex</span>
          </button>
        </div>
      </div>

      <div className={classes.slider}>
        <ImageSlider />
      </div>
      <div className={classes.slider}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Home;
