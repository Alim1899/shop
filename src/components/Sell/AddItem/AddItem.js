import classes from "./AddItem.module.css";
import Options from "../Options/Options";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../InputComponents/FormikControl";
const AddItem = () => {
  const initialValues = {
    category: "",
    brand: "",
    otherbrand: "unbranded",
    model: "",
    gender: "",
    subcategory: "",
  };

  const OptionPicker = (value) => {
    const val = value + 'Categories'
    const str = val.replace(/ /g, '');
    const opt = Options.StepCategories;
    return opt[str];
  };

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("Required"),
    brand: Yup.string().required("Required"),
    otherbrand: Yup.string().min(2, "Too short").max(50, "Too long"),
    gender: Yup.string().required("Required"),
    model: Yup.string().required("Required"),
    subcategory: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={classes.parent}>

   
    <div className={classes.back}>
      <h2 className={classes.header}>Fill details about your item</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className={classes.form}>
            <div className={classes.category}>
              <FormikControl
                control="select"
                label="Select a Category"
                name="category"
                options={Options.Categories}
                className={classes.categoryList}
              />
              {formik.values.category !== "" && (
                <FormikControl
                  control="select"
                  label=" Select Type"
                  name="subcategory"
                  className={classes.types}
                  options={OptionPicker(formik.values.category)}
                />
              )}
            </div>

            {formik.values.subcategory !== ""  && (
              <div className={classes.details}>
                <FormikControl
                  control="select"
                  label="Select a brand"
                  name="brand"
                  className={classes.brandList}
                  options={Options.Brands}
                />
                {formik.values.brand === "Other" && (
                  <FormikControl
                    control="input"
                    label="Input manually"
                    name="otherbrand"
                  ></FormikControl>
                )}
                <FormikControl
                  control="input"
                  label="Model"
                  name="model"
                ></FormikControl>
                <div className={classes.gender}>
                  <FormikControl
                    control="radio"

                    label="Suitable for:"
                    name="gender"
                    options={Options.Genders}
                  ></FormikControl>
                </div>
              </div>
            )}

            <button className={classes.submit} type="submit">SUBMIT</button>
          </Form>
        )}
      </Formik>
    </div> </div>
  );
};

export default AddItem;
