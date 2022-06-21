import React from 'react'
import { useGlobalContext } from './context';

const Message2 = () => {
   const {showHideMsg}= useGlobalContext()
  return (
    <div className="msg">
      <img
        className="cancel"
        src="cancel.png"
        alt="cancel"
        onClick={showHideMsg}
      />
      <img src="../rocket.png" alt="thumbs" />
      <h2>Awesome!</h2>
      <p>You have successfully increased your voting power,</p>
      <p>Go and make your favorite candidate win!</p>
      <button className="btn-create-acc" onClick={showHideMsg}>
        <a href="/votingCategory">Go to voting page</a>
      </button>
    </div>
  );
}

export default Message2