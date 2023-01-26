import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export const Register = () => {
  return (
    <div className="register">
      <div className="registerShadow">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username"
            required
          />
          <label>Email</label>
          <input
            type="email"
            className="registerInput"
            placeholder="Enter your email address"
            required
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password"
            required
          />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link to='/login' className='link'>Login</Link>
        </button>
      </div>
    </div>
  );
};
