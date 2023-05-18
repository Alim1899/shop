import React, {useState} from 'react'
import classes from './Popup.module.css'
 const Popup = () => {
    const [message, showMessage] = useState(true);

  const removeMessage = (e) => {
    e.preventDefault();
    showMessage(false);
  };
  return (
    <div>
         {message && (
        <div style={{ visibility: { message } }} className={classes.popup}>
          <h6>
            This page is for example only. You can't buy or sell anything here
          </h6>
          <button onClick={removeMessage} type="button">
            Got it!
          </button>
        </div>
      )}
    </div>
   
  )
}

export default Popup;