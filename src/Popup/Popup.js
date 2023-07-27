import React, {useState} from 'react'
import classes from './Popup.module.css'
 const Popup = () => {
    const [message, showMessage] = useState(localStorage.getItem('pop')?false:true);

  const removeMessage = (e) => {
    e.preventDefault();
   localStorage.setItem('pop', false)
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