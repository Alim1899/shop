import classes from "./CartComponent.module.css";
const CartComponent = (props) => {
  return (
    <div className={classes.cart}>
      <div className={classes.main}>
        <div className={classes.img}>
          <img src={props.src} alt="" />
        </div>

        <div className={classes.specs}>
          <h6>
            {props.brand} - {props.model} - {props.gender} - {props.category}{" "}
          </h6>
        </div>
      </div>

      <div className={classes.numb}>
        <h6>
          <button className={classes.minus}>-</button>
          {props.count}<button className={classes.plus}>+</button>
        </h6>
        <h6>{props.price}usd</h6>
      </div>
    </div>
  );
};

export default CartComponent;
