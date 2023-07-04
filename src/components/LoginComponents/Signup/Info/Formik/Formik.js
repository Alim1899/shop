import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Data from "../../Number/Data/Data";
import classes from "./Formik.module.css";
import Gender from "../Gender";

const SignupForm = (props) => {
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
    number: Yup.string()
      .min(4, "Invalid number")
      .max(30, "Invalid number")
      .required("Required"),
    password: Yup.string()
      .min(6, "Minimum 6 Symbols")
      .max(15, "Maximum 15 Symbols")
      .required("Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .min(6, "Minimum 6 Symbols")
      .max(15, "Maximum 15 Symbols")
      .required("Confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const getClasses = (touched, error) => {
    if (!touched) return classes.normal;
    if (touched && !error) return classes.valid;
    if (touched && error) return classes.invalid;
  };

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        validateOnChange
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <label>Firstname</label>
            <Field
              name="firstName"
              onInput={() => (touched.firstName = true)}
              className={getClasses(touched.firstName, errors.firstName)}
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label>Lastname</label>
            <Field
              name="lastName"
              onInput={() => (touched.lastName = true)}
              className={getClasses(touched.lastName, errors.lastName)}
            />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label>Email</label>
            <Field
              name="email"
              onInput={() => (touched.email = true)}
              pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
              type="email"
              className={getClasses(touched.email, errors.email)}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <Data>
              <Field
                name="number"
                type="number"
                className={getClasses(touched.number, errors.number)}
              />

              {errors.number && touched.number ? (
                <div>{errors.number}</div>
              ) : null}
            </Data>
            <Gender />
            <Field
              name="password"
              type="password"
              className={getClasses(touched.password, errors.password)}
            />

            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field
              name="confirmPassword"
              type="confirmPassword"
              className={getClasses(
                touched.confirmPassword,
                errors.confirmPassword
              )}
            />

            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
