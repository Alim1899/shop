import classes from "./Login.module.css";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormikControl from "../../InputComponents/FormikControl";

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
          {({ formik }) => (
            <Form className={classes.form}>
            <h4 className={classes.heading}>Enter your account details</h4>
              <FormikControl
                    control="input"
                    label="E-mail"
                    name="email"
                  ></FormikControl>
                  <div className={classes.transfer}>
                <span>
                  Don't have an account? <a href="/signup">Sign up</a>
                </span>
              </div>

<FormikControl
                  name="password"
                  label="Enter password"
                  control="input"
                  type={showPass ? "text" : "password"}
                />
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
              


              
              
              <div className={classes.transfer}>
                <span>
                  Forgot password? <a href="/reset">Reset</a>
                </span>
              </div>

              <button className={classes.submit} type="submit">
                LOG IN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
