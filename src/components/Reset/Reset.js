import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircleCheck,
  faBan,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Reset.module.css";

const Reset = (props) => {
  const [spinner, setSpinner] = useState(false);
  const [rightEmail, setRightEmail] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [emailState, setEmailState] = useState("");
  const [resetValues, setResetValues] = useState({});
  const [idForResetedUser, setIdForResetedUser] = useState("");
  const registeredUserEmails = [];
  let enteredEmail = "";

  const changeVisibility = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const spin = () => {
    setRightEmail(false);
    setWrongEmail(false);
    setTimeout(() => {
      setSpinner(false);
    }, 1000);

    setSpinner(true);
  };

  const checkEmail = async (values) => {
    await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/email.json",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    await fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/email.json")
      .then((response) => response.json())
      .then((data) => {
        spin();
        if (data) {
          enteredEmail = Object.entries(data)[0][1].email;
          setEmailState(enteredEmail);
          if (registeredUserEmails.includes(enteredEmail)) {
            setTimeout(() => {
              setRightEmail(true);
            }, 1000);
          } else {
            setTimeout(() => {
              setWrongEmail(true);
            }, 1000);
          }
        }
      });
    await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/email.json",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const fetchData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        Object.entries(data).map((el) =>
          registeredUserEmails.push(el[1].email)
        );
      });
  };
  fetchData();

  const changePassword = async (values) => {
    await fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < Object.entries(data).length; i++) {
          if (emailState === Object.entries(data)[i][1].email) {
            setIdForResetedUser(Object.entries(data)[i][0]);
            const newUser = Object.assign(Object.entries(data)[i][1]);
            newUser.password = values.password;
            newUser.confirmPassword = values.confirmPassword;
            //console.log(newUser);
            setResetValues((resetValues) => ({
              ...resetValues,
              ...newUser,
            }));
            return;
          }
        }
      });
  };
  useEffect(() => {
    if (resetValues.email) {
      fetch(
    `https://hikemart-2877b-default-rtdb.firebaseio.com/users/${idForResetedUser}.json`,
    {
      method: "DELETE",
      
    }
  )
      fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(resetValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [resetValues, idForResetedUser]);

  
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(/^(?!.*@[^,]*,)/),
  });
  const PasswordSchema = Yup.object().shape({
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
  });
  const getClasses = (touched, error) => {
    if (!touched) return classes.normal;
    if (touched && !error) return classes.valid;
    if (touched && error) return classes.invalid;
  };
  return (
    <div className={classes.parent}>
      <div className={classes.reset}>
        <div className={classes.back}>
          <Formik
            validateOnChange
            initialValues={{
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              checkEmail(values);
            }}
            validator={() => ({})}
          >
            {({ errors, touched }) => (
              <Form className={classes.form}>
                <h2 className={classes.header}>
                  You need to remember your email{" "}
                </h2>
                <label>Email you registered with:</label>
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

                <button type="submit" name="submit" className={classes.check}>
                  <h6>
                    {spinner && (
                      <FontAwesomeIcon
                        className={classes.spin}
                        icon={faSpinner}
                        spin
                      />
                    )}
                    {rightEmail && (
                      <FontAwesomeIcon
                        className={classes.correct}
                        icon={faCircleCheck}
                      />
                    )}
                    {wrongEmail && (
                      <FontAwesomeIcon className={classes.wrong} icon={faBan} />
                    )}
                  </h6>

                  <h6>Check</h6>
                </button>
              </Form>
            )}
          </Formik>
          {rightEmail && (
            <Formik
              validateOnChange
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              validationSchema={PasswordSchema}
              onSubmit={(values) => {
                changePassword(values);
              }}
              validator={() => ({})}
            >
              {({ errors, touched }) => (
                <Form className={classes.form}>
                  <div className={classes.passwordDiv}>
                    <div className={classes.passwordField}>
                      <label>
                        New password
                        <Field
                          name="password"
                          type={showPass ? "text" : "password"}
                          className={getClasses(
                            touched.password,
                            errors.password
                          )}
                        ></Field>
                      </label>

                      {errors.password && touched.password ? (
                        <div className={classes.error}>{errors.password}</div>
                      ) : null}
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
                    </div>

                    <div className={classes.confirmPasswordField}>
                      <label>
                        Confirm new password
                        <Field
                          name="confirmPassword"
                          type={showPass ? "text" : "password"}
                          className={getClasses(
                            touched.confirmPassword,
                            errors.confirmPassword
                          )}
                        ></Field>
                      </label>

                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div className={classes.error}>
                          {errors.confirmPassword}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <button className={classes.submit} type="submit">
                    Reset
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reset;
