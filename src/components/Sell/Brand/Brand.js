import classes from "./Brand.module.css";
import FormikControl from '../../InputComponents/FormikControl'
import { Formik, Form } from "formik";
import * as Yup from "yup";
const Brand = (props) => {
  const initialValues = {
   brand:''
  };
  const validationSchema = Yup.object({
    brand:Yup.string().required("Required")
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  const onChange = (e) => {
    console.log(e.target.value);
  };


  const brands = [
    { key: "Select a brand", value: "Select a brand" },
    { key: "option1", value: "Quechua" },
    { key: "option2", value: "The North face" },
    { key: "option3", value: "Salewa" },
    { key: "option4", value: "Columbia" },
    { key: "option5", value: "Salomon" },
    { key: "option6", value: "Marmot" },
    { key: "option7", value: "Mammut" },
    { key: "option8", value: "Black Diamont" },
    { key: "option9", value: "Jack & WolfSkin" },
  ];

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
   
  >
  <Form className={props.className}>
  <div className={classes.field}>
              {" "}
              <FormikControl
                control="select"
                label="Select a brand"
                name="selectOption"
                options={brands}
                onChange={onChange}
              />
            </div>
  </Form>

  </Formik>
  );
};

export default Brand;
