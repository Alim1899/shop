import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircleCheck,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Reset.module.css";
const Reset = (props) => {
  const [spinner, setSpinner] = useState(false);
  const [rightEmail, setRightEmail] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const spin = () => {
    setRightEmail(false);
    setWrongEmail(false);
    setTimeout(() => {
      setSpinner(false);
    }, 1000);

    setSpinner(true);
  };
  const registeredUsers = [];
  let enteredEmail;
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
          if (registeredUsers.includes(enteredEmail)) {
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
        Object.entries(data).map((el) => registeredUsers.push(el[1].email));
      });
  };
  fetchData();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(/^(?!.*@[^,]*,)/),
  });
  const getClasses = (touched, error) => {
    if (!touched) return classes.normal;
    if (touched && !error) return classes.valid;
    if (touched && error) return classes.invalid;
  };
  return (
    <div className={classes.parent}>
      <div className={classes.reset}>
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
                Don't worry, you can easily restore your account
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
                  {spinner && <FontAwesomeIcon className={classes.spin} icon={faSpinner} spin />}
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
      </div>
    </div>
  );
};

export default Reset;
