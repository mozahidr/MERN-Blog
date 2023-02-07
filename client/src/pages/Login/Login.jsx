import axios from 'axios';
import React, { useContext } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Login.css';

export const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START'});
    try {
      // const response = await axios.post("/auth/login",
      const response = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <div className="loginShadow">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your Username"
            required
            ref={userRef}
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password"
            required
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};
