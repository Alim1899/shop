import React from "react";
import classes from "./CustomFileInput.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CustomFileInput = () => {


  const onFileChange = (e) => {
    const files = [];
    if (e.target.files) {
       Object.values(e.target.files).forEach(el=>{
        files.push(el)
       })
      console.log(files)
  
      } else{
        console.log('false');
      }
    
  };

  return (
    <div>
      <h4 className={classes.header}>Upload pictures</h4>
      <div className={classes.main}>
        

        <div>
          <label htmlFor="input-file">
            <FontAwesomeIcon className={classes.icon} icon={faPlus} />{" "}
          </label>
        </div>

        <input
          className={classes.inputFile}
          type="file"
          id="input-file"
          multiple
          accept="image/png, image/gif, image/jpeg, image/jpg"
          onChange={onFileChange}
        />
      </div>
    </div>
  );
};

export default CustomFileInput;
