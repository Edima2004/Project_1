import React from "react";

import {Link} from 'react-router-dom'
import { useGlobalContext } from "../context";

const CreateAccount = () => {
  const {signUp, handleChangeSign, handleSubmitSign, formErrors}= useGlobalContext()

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
          <span className="or">OR</span>
        </div>
        <form action="submit" className="form-group">
          <div className="form-control">
            <p>
              <label htmlFor="firstName">FirstName</label>
            </p>
            <input type="text"  name="signFirstName" value={signUp.signFirstName} onChange={handleChangeSign}/>
          </div>
          <p className="error-p">{formErrors.fName}</p>
          <div className="form-control">
            <p>
              <label htmlFor="">LastName</label>
            </p>
            <input type="text" name="signLastName" value={signUp.signLastName} onChange={handleChangeSign}/>
          </div>
          <p className="error-p">{formErrors.lName}</p>
          <div className="form-control">
            <p>
              <label htmlFor="">EmailAddress</label>
            </p>
            <input type="email" name="signEmail" value={signUp.signEmail} onChange={handleChangeSign}/>
          </div>
          <p className="error-p"> {formErrors.email}</p>
          <div className="form-control">
            <p>
              <label htmlFor="">PhoneNumber</label>
            </p>
            <input type="number" name="signNumber" value={signUp.signNumber} onChange={handleChangeSign}/>
          </div>
          <p className="error-p">{formErrors.num}</p>
          <div className="form-control">
            <p>
              <label htmlFor="SetPassword">SetPassword</label>
            </p>
            <input type="password" name="signPassword" value={signUp.signPassword} onChange={handleChangeSign}/>
          </div>
          <p className="error-p">{formErrors.psw}</p>
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
        <button type="submit" onClick={handleSubmitSign} className="btn-create-acc">
          Create my account
        </button>
        <div className="bottom"></div>
      </div>
    </section>
  );
};

export default CreateAccount;
