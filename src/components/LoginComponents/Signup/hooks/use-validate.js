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

  return stateReducer;
};

const useValidate = (input) => {
  const [inputState, dispatch] = useReducer(stateReducer, initialState);
  const valueIsValid = input(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useValidate;
