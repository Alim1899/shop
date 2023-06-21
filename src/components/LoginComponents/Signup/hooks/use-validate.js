import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const stateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return stateReducer;
};

const useValidate = (input) => {
  const [inputState, dispatch] = useReducer(stateReducer, initialState);
  const valueIsValid = input(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    console.log('INPUT');
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    console.log('BLUR');

    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useValidate;
