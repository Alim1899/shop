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
    <div className={classes.home}>
      <div className={classes.back}>
        
        <div className={classes.shop}>
          <button>
            <FontAwesomeIcon icon={faPerson} />
            <a href="man">Man</a>
          </button>
          <button>
            <FontAwesomeIcon icon={faPersonDress} />
            <a href="man">Woman</a>
          </button>
          <button>
            <FontAwesomeIcon icon={faChildren} />
            <a href="man">Kid's</a>
          </button>
          <button>
            <FontAwesomeIcon icon={faPersonHalfDress} />
            <a href="man">Unisex</a>
          </button>
        </div>
      </div>

      <div className={classes.slider}>
        <ImageSlider />
      </div>
      
    </div>
  );
};

export default Home;
