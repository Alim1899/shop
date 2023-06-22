import useValidate from "../../hooks/use-validate";

const isNotEmpty = (value) => value.trim() !== "";

const Fullname = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useValidate(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useValidate(isNotEmpty);

  const nameClasses = firstNameHasError ? props.invalid : props.valid;
  const lastNameClasses = lastNameHasError ? props.invalid : props.valid;

  if (firstNameIsValid && lastNameIsValid) {
  }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        style={{ textTransform: "capitalize" }}
        id="name"
        type="text"
        className={nameClasses}
        onBlur={firstNameBlurHandler}
        onChange={firstNameChangeHandler}
        value={firstNameValue}
        placeholder="Steve"
        minLength={2}
      ></input>

      <label htmlFor="lastname">lastName</label>
      <input
        style={{ textTransform: "capitalize" }}
        id="lastname"
        type="text"
        minLength={2}
        placeholder="Mc Gregory"
        className={lastNameClasses}
        onBlur={lastNameBlurHandler}
        onChange={lastNameChangeHandler}
        value={lastNameValue}
      ></input>
    </div>
  );
};

export default Fullname;
