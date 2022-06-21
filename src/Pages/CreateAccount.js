import React from "react";

import {Link} from 'react-router-dom'

const CreateAccount = () => {
  return (
    <section className="create-acc">
      <div className="create-acc-top">
        <h2>Time to vote for your favorite Techie, let's make this amazing!</h2>
        <h3>Create an Account</h3>
        <p>
          Have an account?{" "}
          <Link className="sign" to="/login">
            Log in
          </Link>
        </p>
      </div>
      <div className="create-acc-bottom">
        <button className="google">
          <img src="google.png" alt="google" /> Continue with Google
        </button>
        <div className="create-acc line">
          <span>OR</span>
        </div>
        <form action="" className="form-group">
          <div className="form-control">
            <p>
              <label htmlFor="firstName">FirstName</label>
            </p>
            <input type="text" />
          </div>
          <div className="form-control">
            <p>
              <label htmlFor="">LastName</label>
            </p>
            <input type="text" />
          </div>
          <div className="form-control">
            <p>
              <label htmlFor="">Email Address</label>
            </p>
            <input type="email" />
          </div>
          <div className="form-control">
            <p>
              <label htmlFor="">Phone Number</label>
            </p>
            <input type="number" />
          </div>
          <div className="form-control">
            <p>
              <label htmlFor="SetPassword">SetPassword</label>
            </p>
            <input type="password" />
          </div>
          <div className="form-control">
            <label htmlFor="gender">Gender</label>
            <select className="form-select">
              <option name="Male">Male</option>
              <option name="Female">Female</option>
              <option name="Others">Others</option>
            </select>
          </div>
        </form>
        <h5>
          By registering, you agree to Techtrend's Africa <p>
            <span className="sign">Term of use</span> and
            <span className="sign"> Privacy Policy</span>
          </p>
        </h5>
        <button type="submit" className="btn-create-acc">
          Create my account
        </button>
        <div className="bottom"></div>
      </div>
    </section>
  );
};

export default CreateAccount;
