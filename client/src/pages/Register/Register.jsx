import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';

export const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post("/auth/register", {
        username, email, password
      });
      toast('Registration successful');
      response.data && window.location.replace("/auth/login");
    } catch (err) {
      setError(true);
    }
    
  }
  return (
    <div className="register">
      <div className="registerShadow">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username"
            required
            onChange={e => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            className="registerInput"
            placeholder="Enter your email address"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button className="registerButton" type='submit'>Register</button>
        </form>
        <button className="registerLoginButton">
          <Link to='/login' className='link'>Login</Link>
        </button>
        <ToastContainer />
        {error && <span>Something went wrong!</span>}
      </div>
    </div>
  );
};
