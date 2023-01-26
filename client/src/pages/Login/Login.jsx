import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  return (
    <div className="login">
      <div className="loginShadow">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            type="email"
            className="loginInput"
            placeholder="Enter your email address"
            required
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password"
            required
          />
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to='/register' className='link'>Register</Link>
        </button>
      </div>
    </div>
  );
};
