import React from 'react'

const ConnectedTechies = () => {
  return (
   //! Not yet shown
    <div className='contech'>
      <div className="da-center contech-head">
        <h2 >Connected Techies</h2>
        <p>Learn about us</p>
      </div>
      <div className="home-flex contech-flex">
        <div className="contech-img_1"><img className='donate-img' src="../pic-connected-techies.png" alt="connect" /></div>
        <div className="contech-bottom">
          <h2>Connecting Techies Globally</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>
      </div>
      <img src="../connected-techies2.png" className='donate-img' alt="connect" />
      <div className="bottom"></div>
    </div>
  );
}

export default ConnectedTechies