import classes from "./CustomFileInput.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const CustomFileInput = () => {
  // const [retrievedPhotos, setRetrievedPhotos] = useState([]);
  const [files, setFiles] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [counter, setCounter] = useState(4000);
  useEffect(() => {
    if(hasError){
      counter > 0 && setTimeout(() => setCounter(counter - 1000), 1000);
      if(counter===0)setHasError(false);
    console.log(counter);
    }
    
  }, [counter, hasError]);
  let id = 0;
  const pictures = [];
  const pictureNames = [];
  const onFileChange = (e) => {
    if (e.target.files) {
      Object.values(e.target.files).forEach((el) => {
        if (pictureNames.includes(el.name)) {
          setCounter(4000)
          setHasError(true);
          return;
        } else {
          id++;
          el.key = Math.random() * Math.random();
          el.id = id * Math.random();
          pictureNames.push(el.name);
          pictures.push({ name: el.name, url: URL.createObjectURL(el) });
        }
      });
    } else {
      return;
    }
    console.log(pictures, pictureNames);
    e.target.value = null;
  };
  console.log(counter);

  return (
    <div>
      <h4 className={classes.header}>
        {
          hasError && (
            /* ////////////  ERROR HANDLING//////////////////////////////// */
            <div className={classes.error}>
              <p className={classes.errorMsg}>
                You can't upload duplicate images
              </p>
              {counter > 0 && (
                <h5>Wait {counter / 1000 - 1} second or click below:</h5>
              )}

              <button
                type="button"
                className={classes.close}
                onClick={() => setHasError(false)}
              >
                {" "}
                <FontAwesomeIcon icon={faXmark} />
                <h6>Close</h6>
              </button>
            </div>
          )
          /* //////////////////////////////////////// */
        }
        <button type="button" className={classes.uploadBtn}>
          <label htmlFor="input-file">
            Click
            <FontAwesomeIcon className={classes.icon} icon={faPlus} />
          </label>
          <input
            className={classes.inputFile}
            type="file"
            id="input-file"
            onChange={onFileChange}
            multiple
            accept="image/png, image/gif, image/jpeg, image/jpg"
          ></input>
        </button>
        For Upload Pictures
      </h4>
      <div className={classes.main}>
        {files &&
          files.map((el) => {
            return (
              <img
                className={classes.img}
                key={el.key}
                alt="item"
                src={el.name}
              ></img>
            );
          })}
      </div>
    </div>
  );
};

export default CustomFileInput;

// files.forEach((el) => {
//   fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/images.json")
//     .then((response) => response.json())
//     .then((data) => {
//       if (data) {
//         if (Object.entries(data).length < 11) {
//           postRequest(URL.createObjectURL(el));
//         } else {
//           fetch(
//             "https://hikemart-2877b-default-rtdb.firebaseio.com/images.json",
//             { method: "DELETE" }
//           );
//         }
//       } else {
//         postRequest(URL.createObjectURL(el));
//       }
//     });
// });

// const postRequest = (url) => {
//   fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/images.json", {
//     method: "POST",
//     body: JSON.stringify(url),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// const retrieve = (e) => {
//   e.preventDefault();
//   fetch("https://hikemart-2877b-default-rtdb.firebaseio.com/images.json")
//     .then((response) => response.json())
//     .then((data) => {
//       setRetrievedPhotos(Object.entries(data));
//       return console.log(retrievedPhotos);
//     });
// };
