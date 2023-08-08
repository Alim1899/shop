import classes from "./Login.module.css";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = (props) => {
  const [showPass, setShowPass] = useState(false);
  const changeVisibility = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(/^(?!.*@[^,]*,)/),
    password: Yup.string()
      .min(6, "Minimum 6 Symbols")
      .max(15, "Maximum 15 Symbols")
      .required("Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-])(?=.{8,})/,
        "Must Contain 6-15 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const getClasses = (touched, error) => {
    if (!touched) return classes.normal;
    if (touched && !error) return classes.valid;
    if (touched && error) return classes.invalid;
  };
  return (
    <div className={classes.parent}>
      <div className={classes.login}>
        <Formik
          validateOnChange
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            props.login(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <h4 className={classes.heading}>Enter your account details</h4>
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
              <div className={classes.transfer}>
                <span>
                  Don't have an account? <a href="/signup">Sign up</a>
                </span>
              </div>
              <div className={classes.passwordDiv}>
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
                    <FontAwesomeIcon onClick={changeVisibility} icon={faEye} />
                  )}
                </div>

                {errors.password && touched.password ? (
                  <div className={classes.error}>{errors.password}</div>
                ) : null}
              </div>
              <div className={classes.transfer}>
                <span>
                  Forgot password? <a href="/reset">Reset</a>
                </span>
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

export default Login;
