import { useState } from "react";

const useAgeCalculator = (day, month, year) => {
  const [enteredDay, setEnteredDay] = useState("");
  const [enteredMonth, setEnteredMonth] = useState("");
  const [enteredYear, setEnteredYear] = useState("");

  const dayValueChangeHandler = (event) => {
    if (event.target.value.length <= 2 && event.target.value > 0) {
      setEnteredDay(event.target.value);
    } else {
      setEnteredDay(event.target.value.slice(0, 2));
    }
  };

  const monthValueChangeHandler = (event) => {
    if (event.target.value.length <= 2 && event.target.value > 0) {
      setEnteredMonth(event.target.value);
    } else if (event.target.value < 0) {
      setEnteredMonth(Math.abs(event.target.value.slice(0, 2)));
    } else if (event.target.value === 0) {
      setEnteredMonth("");
    }
  };

  const yearValueChangeHandler = (event) => {
    if (event.target.value.length <= 4 && event.target.value > 0) {
      setEnteredYear(event.target.value);
    } else {
      setEnteredYear(event.target.value.slice(0, 4));
    }
  };
  const dayValue = enteredDay;
  const monthValue = enteredMonth;
  const yearValue = enteredYear;
  console.log(dayValue, monthValue, yearValue);

  return {
    dayValue,
    monthValue,
    yearValue,
    dayValueChangeHandler,
    monthValueChangeHandler,
    yearValueChangeHandler,
  };
};

export default useAgeCalculator;

//   const calculate = (e) => {
//     const now = new Date();
//     const userDate = new Date(
//       enteredYear.current.value,
//       enteredMonth.current.value - 1,
//       enteredDay.current.value
//     );
//     let yyyy = now.getFullYear() - userDate.getFullYear();
//     let mm = now.getMonth() - userDate.getMonth();
//     let dd = now.getDate() - userDate.getDate();
//     if (dd < 0) {
//       dd = 31 - Math.abs(dd);
//       mm = mm - 1;
//     }

//     if (mm < 0) {
//       mm = 12 - Math.abs(mm);
//       yyyy = yyyy - 1;
//     }

//     if (yyyy > 18) {
//       sessionStorage.setItem("Age", "Adult");
//     } else {
//       sessionStorage.setItem("Age", "Kid");
//     }
//   };
