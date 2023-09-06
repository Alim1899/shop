import classes from "./AddItem.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const AddItem = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    
  });
  return (
    
    <div className={classes.parent}>
      <div className={classes.back}>
        <Formik
          validateOnChange
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            password: "",
            age: "",
            confirmPassword: "",
            gender: "",
            id: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
          
          }}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>

           
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddItem;
