import classes from "./AddItem.module.css";
import Brand from "../Brand/Brand";

const AddItem = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.back}>
        <form className={classes.form} >
          <h4 className={classes.heading}>Details of the item:</h4>
<Brand/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
 