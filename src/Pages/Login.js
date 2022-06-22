import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Login = () => {
  const { logIn, handleChangeLog, handleSubmitLog, formErrors } = useGlobalContext();
  return (
    <div className="create-acc">
      <div className="create-acc-top">
        <h2>Time to vote for your favorite Techie, let's make this amazing!</h2>
        <h3>Create an Account</h3>
        <p>
          Don't have an account?{" "}
          <Link className="sign" to="/createAccount">
            SignUp
          </Link>
        </p>
      </div>
      <div className="create-acc-bottom">
        <button className="google">
          <img src="google.png" alt="google" /> Continue with Google
        </button>
        <div className="line">
          <span className="or">OR</span>
        </div>
        <form >
          <div className="form-control">
            <p>
              <label htmlFor="email">EmailAddress</label>
            </p>
            <input name="logEmail" value={logIn.logEmail} type="email"  onChange={handleChangeLog}/>
          </div>
          <p className="error-p">{formErrors.logEmail}</p>
          <div className="form-control">
            <p>
              <label htmlFor="password">Password</label>
            </p>
            <input name="logPassword" value={logIn.logPassword} type="password" onChange={handleChangeLog} />
          </div>
          <p className="error-p">{formErrors.logPassword}</p>
        </form>
      </div>
      <button type="submit" onClick={handleSubmitLog} className="btn-create-acc">
        Log In
      </button>
      <br />
      <p className="forgot-pass">
        <a href="/">Forgot Password</a>
      </p>
      <div className="bottom"></div>
    </div>
  );
};

export default Login;
