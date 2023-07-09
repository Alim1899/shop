import Signup from "../Signup/Signup";
const Sign = (props) => {

  const sendData = () => {
    let obj = Object.keys(sessionStorage).reduce(function (obj, key) {
      obj[key] = sessionStorage.getItem(key);
      return obj;
    }, {});

    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/emails.json", {
      method: "POST",
      body: JSON.stringify({
        email: obj.email ? obj.email : null,
        password: obj.password ? obj.password : null,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const emails = [];
  const getData = async () => {
    fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          Object.entries(data).forEach((el) => {
            emails.push(el[1].email);
          });
        }
      });
  };
sendData();
  getData();

  return (
    <div>
      <Signup/>

      
    </div>
  );
};

export default Sign;
