import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Data from "../Number/Data/Data";
import classes from "./SignupForm.module.css";
import Gender from "../Gender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupForm = (props) => {
  const [showPass, setShowPass] = useState(false);
  const changeVisibility = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(/^(?!.*@[^,]*,)/),
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
        "Must Contain 6-15 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .min(6, "Minimum 6 Symbols")
      .max(15, "Maximum 15 Symbols")
      .required("Confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    age: Yup.string()

      .matches(/^[1-9]{0,2}$/, "Age must be between 1-99")

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
            values.id = Math.round(Math.random() * 1000);
            values.gender = document.getElementById('gender').value;
            console.log(values);
            props.sign(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <h4 className={classes.heading}>Fill all fields for Sign Up</h4>

              <label>Firstname</label>
              <Field
                name="firstName"
                onInput={() => (touched.firstName = true)}
                className={getClasses(touched.firstName, errors.firstName)}
              />
              {errors.firstName && touched.firstName ? (
                <div className={classes.error}>{errors.firstName}</div>
              ) : null}
              <label>Lastname</label>
              <Field
                name="lastName"
                onInput={() => (touched.lastName = true)}
                className={getClasses(touched.lastName, errors.lastName)}
              />
              {errors.lastName && touched.lastName ? (
                <div className={classes.error}>{errors.lastName}</div>
              ) : null}
              <label>Email</label>
              <Field
                name="email"
                onInput={() => (touched.email = true)}
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                type="email"
                className={getClasses(touched.email, errors.email)}
              />
              {errors.email && touched.email ? (
                <div className={classes.error}>{errors.email}</div>
              ) : null}

              <Data>
                <Field
                  name="number"
                  type="number"
                  className={getClasses(touched.number, errors.number)}
                />

                {errors.number && touched.number ? (
                  <div className={classes.error}>{errors.number}</div>
                ) : null}
              </Data>

              <label>Age</label>
              <Field
                name="age"
                onInput={() => (touched.age = true)}
                type="number"
                className={getClasses(touched.age, errors.age)}
              />
              {errors.age && touched.age ? (
                <div className={classes.error}>{errors.age}</div>
              ) : null}
              <Gender
                name="gender"
                id='gender'
                onSelect={() => (touched.gender = true)}
                className={getClasses(touched.gender, errors.gender)}
              />

              <div className={classes.passwordDiv}>
                <div className={classes.passwordField}>
                  <label>Password</label>

                  <Field
                    name="password"
                    type={showPass ? "text" : "password"}
                    className={getClasses(touched.password, errors.password)}
                  ></Field>
                  <div className={classes.showhide}>
                    {showPass ? (
                      <FontAwesomeIcon
                        onClick={changeVisibility}
                        icon={faEyeSlash}
                      />
                    ) : (
                      <FontAwesomeIcon
                        onClick={changeVisibility}
                        icon={faEye}
                      />
                    )}
                  </div>

                  {errors.password && touched.password ? (
                    <div className={classes.error}>{errors.password}</div>
                  ) : null}
                </div>

                <div className={classes.confirmPasswordField}>
                  <label>Confirm password</label>
                  <Field
                    name="confirmPassword"
                    type={showPass ? "text" : "password"}
                    className={getClasses(
                      touched.confirmPassword,
                      errors.confirmPassword
                    )}
                  />

                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className={classes.error}>
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </div>

              <button className={classes.submit} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
