import classes from "./AddItem.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";



const AddItem = () => {
  const brands = ['quechua','redd', 'undd','true'];
  const SignupSchema = Yup.object().shape({
    brand: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    
  });
  const getClasses = (touched, error) => {
    if (!touched) return classes.normal;
    if (touched && !error) return classes.valid;
    if (touched && error) return classes.invalid;
  };
  return (
    
    <div className={classes.parent}>
      <div className={classes.back}>
        <Formik
          validateOnChange
          initialValues={{
           brand:""
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
          console.log(values);
          }}
        >
        
          {({ errors, touched }) => (
            <Form className={classes.form}>
            <h4 className={classes.heading}>Details of the item:</h4>
            <div className={classes.brand}>
              <label>Brand</label>
              <select className={classes.select}>
              <option></option>
                {brands.map(el=><option key={el}>{el}</option>)}
              </select>
              <Field
                name="brand"
                onInput={() => (touched.brand = true)}
                className={getClasses(touched.brand, errors.brand)}
              />
              {errors.brand && touched.brand ? (
                <div className={classes.error}>{errors.brand}</div>
              ) : null}
              
            </div>
            
           
            </Form>
          )}
        </Formik>
       
      </div>
    </div>
  );
};

export default AddItem;
