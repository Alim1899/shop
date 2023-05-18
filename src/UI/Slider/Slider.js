import React from "react";
import slide1 from "./slides/slide1.jpg";
import slide2 from "./slides/slide2.jpg";
import slide3 from "./slides/slide3.jpg";
import slide4 from "./slides/slide4.jpeg";
import slide5 from "./slides/slide5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css"; 
import "slick-carousel/slick/slick.css";
import classes from "./Slider.module.css"; 


const ImageSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={classes.slider}>
    <h3>Highlighted items</h3>
    <Slider {...settings}>
      <div>
        <img className={classes.slide} src={slide1} alt='slide1'></img>
      </div>
      <div>
      <img className={classes.slide} src={slide2} alt='slide2'></img>
      </div>
      <div>
      <img className={classes.slide} src={slide3} alt='slide3'></img>
      </div>
      <div>
      <img className={classes.slide} src={slide4} alt='slide4'></img>
      </div>
      <div>
      <img className={classes.slide} src={slide5} alt='slide5'></img>
      </div>
      
    </Slider>
  </div>
  );
};

export default ImageSlider;
