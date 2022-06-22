import React from "react";

const Donation = () => {
  return (
    <div>
      <header className="home-center">
        <h2>Make a Donation</h2>
        <p className="light">
          Complete your nomination by contributing to the growth of technology
          in Africa
        </p>
      </header>
      <aside className="home-center">
        <img className="donate-img" src="../donation.png" alt="donation" />
      </aside>
      <h4 className="donate-align donate-word">Enter Donation Amount</h4>
      <aside className="donate-align">
        <img className="dollar" src="dollar.png" alt="dollar" />
        <input type="number" className='donate-input' />
      </aside>
      <aside className="home-center">
        <button className="btn-create-acc donate-btn">Make a Donation</button>
      </aside>
      
      <p className="donate-align donate-p p1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer
      </p>
      <ul className="donate-align donate-p">
        <li>The Connected Hack-ton in Major Cities across Africa</li>
        <li>
          The Peer to Gear Competition for Secondary School Students in Africa
        </li>
        <li>Marathon Events across various Cities in Africa </li>
        <li>
          Tech-awareness across various schools, towns and villages in Africa{" "}
        </li>
        <li>
          Empowering more ladies in tech to bring a balance to the African
          ecosystem
        </li>
      </ul>
      <div className="bottom"></div>
    </div>
  );
};

export default Donation;
