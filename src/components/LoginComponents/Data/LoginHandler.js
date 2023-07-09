import Login from "../Login/LoginPage/Login";
import classes from "./LoginHandler.module.css";
const LoginHandler = (props) => {
  //Fetching data from firebase
  const fetchData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/emails.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(Object.entries(data));
      });
  };
  fetchData();

  return (
    <div className={classes.loginPage}>

      <Login handler={()=>window.location.pathname="signup"}/>
    </div>
  );
};

export default LoginHandler;
