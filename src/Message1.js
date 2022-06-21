import React from 'react'
import { useGlobalContext } from './context'

const Message1 = () => {
   const {showHideMsg}= useGlobalContext()
  return (
    <div className='msg'>
      <img className='cancel' src="cancel.png" alt="cancel" onClick={showHideMsg} />
      <img src="../thumbs-up.png" alt="thumbs" />
      <h2>Awesome!</h2>
      <p>Thank you for taking the time to vote.</p>
      <p>We are commited to promoting technology in Africa</p>
      <button className='btn-create-acc' onClick={showHideMsg}>Return to voting page</button>
    </div>
  )
}

export default Message1