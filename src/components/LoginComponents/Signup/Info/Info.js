import classes from "./Info.module.css";
import useValidate from "../hooks/use-validate";
// import useAgeCalculator from "../hooks/use-age-calculator";
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const birthdayRegex = new RegExp(
  "^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))1|(?:(?:29|30)(/|-|.)(?:0?[13-9]|1[0-2])2))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)0?23(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))4(?:(?:1[6-9]|[2-9]d)?d{2})$"
);
const checkEmail = (value) => regex.test(value);
const checkBirthday = (value) => birthdayRegex.test(value);

const Info = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useValidate(checkEmail);
  const {
    value: birthdayValue,
    isValid: birthdayIsValid,
    hasError: birthdayHasError,
    valueChangeHandler: birthdayChangeHandler,
    inputBlurHandler: birthdayBlurHandler,
  } = useValidate(checkBirthday);

  const emailClass = emailHasError&&!emailIsValid ? props.invalid : props.valid;
  const birthdayClass = birthdayHasError ? props.invalid : props.valid;

  console.log(birthdayIsValid, birthdayValue.toString());
  return (
    <div>
      <label htmlFor="age">
        Birth date
        <div className={classes.age}>
          <input
            value={birthdayValue}
            onChange={birthdayChangeHandler}
            onBlur={birthdayBlurHandler}
            className={birthdayClass}
            id="birthday"
            placeholder="mm-dd-yyyy"   
            name="date"
                     type="date"
          ></input>
        </div>{" "}
      </label>
      <select id="gender" className={classes.select}>
        Gender
        <option id="gender" disabled>
          Gender
        </option>
        <option id="gender" value="Unisex">
          Prefer not to say
        </option>
        <option id="gender">Male</option>
        <option id="gender">Female</option>
      </select>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={emailValue}
        onBlur={emailBlurHandler}
        onChange={emailChangeHandler}
        className={emailClass}
        title="Invalid email address"
        placeholder="example@example.com"
        type="text"
      ></input>
    </div>
  );
};

export default Info;
