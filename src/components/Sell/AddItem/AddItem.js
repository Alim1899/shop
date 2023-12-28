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
    const val = value + "Categories";
    const str = val.replace(/ /g, "");
    const opt = Options.StepCategories;
    return opt[str];
  };

  const btnEnabler = (value1, value2, value3) => {
    if (value1 && value2 && value3) return false;
    else return true;
  };

  const current = [];
  const change = (touched, values) => {
    const currentValue = values.category;
    if(current[current.length-1]!==currentValue) current.push(currentValue);
    console.log(values);
    if (values.category === "") {
      touched.subcategory=false;
      touched.category=false;
      touched.model=false;
      touched.brand=false;
      touched.gender =false;
      values.subcategory=""
    }
    // console.log(current);
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
    // console.log(values);
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
                  onInput={change(formik.touched, formik.values)}
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

              {formik.values.subcategory !== "" &&
                formik.values.category !== "" && (
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

              <button
                className={classes.submit}
                type="submit"
                value="Fill all fields"
                disabled={btnEnabler(
                  formik.values.brand,
                  formik.values.model,
                  formik.values.gender
                )}
              >
                SUBMIT
              </button>
            </Form>
          )}
        </Formik>
      </div>{" "}
    </div>
  );
};

export default AddItem;
