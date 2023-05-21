import classes from "./Cart.module.css";
import CartComponent from "./CartComponent";
const Cart = () => {
  return (
    <div className={classes.cart}>
      <h3>Shopping Cart</h3>
      <div className={classes.item}>
        <CartComponent
        src="https://shorturl.at/mAD89"
        brand="Quechua"
        gender="Unisex"
        category="Running Shoes"
        model="Run100"
        count="1"
        price="12.99"
      />
      </div>
      <div className={classes.item}>
        <CartComponent
        src="https://shorturl.at/fjkI1"
        brand="Black Diamond"
        gender="Male"
        category="Raincoat"
        model="shx-500"
        count="2"
        price="13.90"
      />
      </div>
      <div className={classes.item}>
        <CartComponent
        src="https://shorturl.at/pvL14"
        brand="Gregory"
        gender="Kids"
        category="Day pack"
        model="Atmos 23"
        count="1"
        price="77.99"
      />
      </div>
     
      
      <button>Go to checkout</button>
    </div>
  );
};

export default Cart;
