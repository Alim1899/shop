const Sign = async (values) => {
  const emails = [];
  await fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/users.json")
    .then((response) => response.json())
    .then((data) => {
      Object.entries(data).map((el) => emails.push(el[1].email));
    });

  if (emails.includes(values.email)) {
    console.log("THis email exist");
    return <>
      <h2 styles={{position:'absolute'}}>This email already registered</h2>
    </>
  } else {
    console.log("Registered");
    await fetch(
      "https://hikemart-2877b-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export default Sign;
// fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/emails.json", {
//       method: "POST",

//       body: JSON.stringify({
//         email: value.email ? value.email : 'null',
//         password: value.password ? value.password : 'null',
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
