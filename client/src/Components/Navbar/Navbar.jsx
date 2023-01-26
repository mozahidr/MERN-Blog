import React from 'react';
import './Navbar.css';
import dp from '../../images/dp.jpg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/writePost" className="link">
              Write
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItems">{user && 'Logout'}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img src={dp} alt="dp" className="topImg" />
        ) : (
          <>
            <Link to="/register" className="link lr">
              Register
            </Link>
            <Link to="/login" className="link lr">
              Login
            </Link>
          </>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
