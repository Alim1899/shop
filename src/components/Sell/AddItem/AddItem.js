import classes from "./AddItem.module.css";
import Brands from "../Brand/Brand";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../InputComponents/FormikControl";
const AddItem = () => {
  const initialValues = {
    brand: "",
    otherbrand: ''
  };

  const validationSchema = Yup.object({
    brand: Yup.string().required("Required"),
    otherbrand: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={classes.back}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className={classes.form}>
            <FormikControl
              control="select"
              label="Select a brand"
              name="brand"
              options={Brands}
            />
            {formik.values.brand === "Other" && (
              <FormikControl
                control="input"
                label="Input brand name"
                name="otherbrand"
              ></FormikControl>
            )}

            <button type="submit">SUBMIT</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddItem;
