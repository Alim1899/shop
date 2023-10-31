import classes from "./AddItem.module.css";
import Brand from "../Brand/Brand";

const AddItem = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.back}>
       
          <h4 className={classes.heading}>Details of the item:</h4>
<Brand className={classes.form} />
          <button type="submit">Submit</button>
      
      </div>
    </div>
  );
};

export default AddItem;
 