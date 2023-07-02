import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import classes from "./Formik.module.css";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const log = (...par) => {
  console.log(par);
};

const getClasses = (touched, error) => {
  if (!touched) return classes.normal;
  if(touched&&!error)return classes.valid;
  if(touched&&error)return classes.invalid;
};

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log();
      }}
    >
      {({ errors, touched }) => (
        <Form className={classes.form}>
          <label>Firstname</label>
          <Field
            name="firstName"
            onInput={log(touched.firstName)}
            className={getClasses(touched.firstName, errors.firstName) }
          />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <label>Lastname</label>
          <Field
            name="lastName"
            className={getClasses(touched.lastName, errors.lastName) }
          />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <label>Email</label>
          <Field
            name="email"
            type="email"
            className={getClasses(touched.email, errors.email) }
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default SignupSchema;