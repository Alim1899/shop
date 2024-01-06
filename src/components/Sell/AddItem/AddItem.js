import classes from "./AddItem.module.css";
import Options from "../Options/Options";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomFileInput from "./CustomFileInput/CustomFileInput";
import FormikControl from "../../InputComponents/FormikControl";
import { useState } from "react";
const AddItem = () => {
  const [showType, setShowType] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  const initialValues = {
    category: "",
    brand: "",
    otherbrand: "",
    model: "",
    gender: "",
    subcategory: "",
  };
  const OptionPicker = (value) => {
    if (value) {
      const val = value + "Categories";
      const str = val.replace(/ /g, "");
      const opt = Options.StepCategories;
      return opt[str];
    } else {
      return [{ key: "Choose", value: "" }];
    }
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const btnEnabler = (value1, value2, value3) => {
    if (value1 && value2 && value3) return false;
    else return true;
  };

  const change = (e, values, touched) => {
    if (e.target.id === "category") {
      if (e.target.value) {
        setShowType(true);
        setShowBrand(false);
      } else {
        setShowType(false);
        setShowBrand(false);
      }
    } else if (e.target.id === "subcategory") {
      if (e.target.value) {
        setShowBrand(true);
      } else {
        setShowBrand(false);
      }
    }
  };

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("Required"),
    brand: Yup.string().required("Required"),
    otherbrand: Yup.string().min(2, "Too short").max(50, "Too long"),
    gender: Yup.string().required("Required"),
    model: Yup.string().required("Required"),
    subcategory: Yup.string().required("Required"),
  });

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
            <Form
              className={classes.form}
              onChange={(e) => change(e, formik.values, formik.touched)}
            >
              <div className={classes.category}>
                <FormikControl
                  control="select"
                  label="Select a Category"
                  name="category"
                  options={Options.Categories}
                  className={classes.categoryList}
                />
                {showType && (
                  <FormikControl
                    control="select"
                    label=" Select Type"
                    name="subcategory"
                    className={classes.types}
                    options={OptionPicker(formik.values.category)}
                  />
                )}
              </div>

              {showBrand && (
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
                      placeholder="optional"
                      className={classes.otherbrand}
                    ></FormikControl>
                  )}
                  <FormikControl
                    control="input"
                    label="Model"
                    name="model"
                    className={classes.model}
                  ></FormikControl>
                  <div className={classes.gender}>
                    <FormikControl
                      control="radio"
                      label="Suitable for:"
                      name="gender"
                      options={Options.Genders}
                    ></FormikControl>
                  </div>
              
              <CustomFileInput></CustomFileInput>
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





    /* <div className={classes.photoUpload}>
                    <label htmlFor="photo">Upload pictures</label>
                    

                    <div className={classes.uploadedPhotos}>
                      <div>
                    <input
                      className={classes.photoUploadField}
                      id="photo"
                      type="file"
                      alt="Chh"
                    ></input>
                      </div>
                    </div>
                  </div> */