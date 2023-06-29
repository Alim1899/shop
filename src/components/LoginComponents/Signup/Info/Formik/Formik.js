// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from './Formik.module.css'

const Basic = () => (
  <div className={classes.form}>
    <h1>Register:</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        number: "",
        lastname: "",
        gender: "",
        age: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field type="text" name="email" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Lastname
            <Field type="text" name="name" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Birth date
            <Field type="number" placeholder='dd' name="day" />
            <Field type="number" placeholder='mm' name="month" />
            <Field type="number" placeholder='yyyy' min='1920' max='2020' name="year" />
            <ErrorMessage name="number" component="div" />
          </label>

          <label>
            Gender
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Phone number
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <label>
            Confirm password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
