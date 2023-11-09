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
    // console.log(opt[str], str);
    // if (value === "Clothing") return Options.StepCategories.ClothingCategories;
    // if (value === "Footwear") return Options.StepCategories.FootwearCategories;
    // if (value === "Travel Gear")
    //   return Options.StepCategories.TravelGearCategories;
    // if (value === "Camping And Hiking")
    //   return Options.StepCategories.CampingAndHikingCategories;
    // if (value === "Climbing") return Options.StepCategories.ClimbingCategories;
    // if (value === "Snowsports")
    //   return Options.StepCategories.SnowsportsCategories;
      
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
              />
              {formik.values.category !== "" && (
                <FormikControl
                  control="select"
                  label=" Select Type"
                  name="subcategory"
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

            <button type="submit">SUBMIT</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddItem;
