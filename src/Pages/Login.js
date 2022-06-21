import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
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
        <div className="create-acc line"><span>OR</span></div>
        <form action="">
          <div className="form-control">
            <p>
              <label htmlFor="email">Email Address</label>
            </p>
            <input type="email" />
          </div>
          <div className="form-control">
            <p>
              <label htmlFor="password">Password</label>
            </p>
            <input type="password" />
          </div>
        </form>
      </div>
      <button type="submit" className="btn-create-acc">
        Log In
      </button>
      <br />
      <p className="forgot-pass">
        <a href="*">Forgot Password</a>
      </p>
      <div className="bottom"></div>
    </div>
  );
}

export default Login