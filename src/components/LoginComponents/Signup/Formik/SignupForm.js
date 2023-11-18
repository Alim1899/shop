import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Data from "../Number/Data/Data";
import classes from "./SignupForm.module.css";
import Gender from "../Gender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormikControl from "../../../InputComponents/FormikControl";

const SignupForm = (props) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const changePassVisibility = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const changeConfirmPassVisibility = (e) => {
    e.preventDefault();
    setShowConfirmPass(!showConfirmPass);
  };
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Short!")
      .max(50, "Long!")
      .required("Required")
      .matches(/^[a-zA-Z\s]*$/, "Special characters not allowed"),
    lastname: Yup.string()
      .min(2, "Short!")
      .max(50, "Long!")
      .required("Required")
      .matches(/^[a-zA-Z\s]*$/, "Special characters not allowed"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(/^(?!.*@[^,]*,)/),
    number: Yup.number()
      .typeError("Enter only numbers")
      .test("len", "Short", (val) => val.toString().length >= 4)
      .test("len", "Too Long!", (val) => val.toString().length <= 20)
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
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    age: Yup.date().required("Required"),

  });

  return (
    <div className={classes.parent}>
      <div className={classes.back}>
        <Formik
        validateOnChange
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            number: "",
            password: "",
            age: null,
            confirmPassword: "",
            gender: "",
            id: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            values.id = Math.round(Math.random() * 1000);
            values.gender = document.getElementById("gender").value;
            console.log(values);
            // props.sign(values);
          }}
        >
          {(formik) => (
            <Form className={classes.form}>
              <h4 className={classes.heading}>Fill all fields for Sign Up</h4>

              <FormikControl
              onInput={()=>console.log(formik.errors.firstname)}
                name="firstname"
                label="Firstname"
                control="input"
                type='text'
              />

              <FormikControl name="lastname" label="Lastname" control="input" />

              <FormikControl
                name="email"
                label="Email"
                control="input"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              />

              <Data>
                <FormikControl name="number" control="input" />
              </Data>

              <FormikControl
                name="age"
                label="Choose your birthday"
                control="date"
                placeholder="date"
              />

              <FormikControl
                name="gender"
                control="select"
                label="Choose your gender"
                options={Gender}
              />

              <div className={classes.password}>
                <FormikControl
                  name="password"
                  label="Enter password"
                  control="input"
                  type={showPass ? "text" : "password"}
                />
                <div className={classes.showhide}>
                  {showPass ? (
                    <FontAwesomeIcon
                      onClick={changePassVisibility}
                      icon={faEyeSlash}
                    />
                  ) : (
                    <FontAwesomeIcon onClick={changePassVisibility} icon={faEye} />
                  )}
                  </div>
                  <FormikControl
                    name="confirmPassword"
                    label="Repeat password"
                    control="input"
                    type={showConfirmPass ? "text" : "password"}
                  />
                <div className={classes.showhide}>
                  {showConfirmPass ? (
                    <FontAwesomeIcon
                      onClick={changeConfirmPassVisibility}
                      icon={faEyeSlash}
                    />
                  ) : (
                    <FontAwesomeIcon onClick={changeConfirmPassVisibility} icon={faEye} />
                  )}
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
