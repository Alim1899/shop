import React from "react";
import background from "../assets/hike.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonHalfDress,
  faPersonDress,
  faPerson,
  faChildren,
} from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "./Slider/Slider";
import classes from "./Background.module.css";

const Background = () => {
  return (
    <div className={classes.background}>
      <img alt="background" src={background}></img>
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
      <div className={classes.slider}>
        <ImageSlider />
      </div>
    </div>
  );
};
export default Background;
