import React from 'react';
import './Navbar.css';
import dp from '../../images/dp.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  //const PUBLIC_FOLDER = 'http://localhost:5000/images/';
  const PUBLIC_FOLDER = 'https://mern-blog-4tol.onrender.com/images/';
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
      </div>
      <div className="topCenter">
        <div className="topList">
          <ul>
            <li className="link-3">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="link-3">
              <Link to="/" className="link">
                About
              </Link>
            </li>
            <li className="link-3">
              <Link to="/" className="link">
                Authors
              </Link>
            </li>
            <li className="link-3">
              <Link to="/writePost" className="link">
                Write
              </Link>
            </li>
            <li className="link-3">
              <Link to="/" className="link">
                Careers
              </Link>
            </li>
            <li className="link-3">
              <Link to="/" className="link">
                Contact
              </Link>
            </li>
            <li className="link-3" onClick={handleLogout}>
              {user && 'Logout'}
            </li>
          </ul>
        </div>
      </div>
      <div className="topRight">
        {user ? (
          <Link to='/profileSetting'>
            <img
              src={user?.profilePic ? PUBLIC_FOLDER + user.profilePic : dp}
              alt="dp"
              className="topImg"
            />
          </Link>
        ) : (
          <>
            <Link to="/auth/register" className="link-1 link lr">
              Register
            </Link>
            <Link to="/auth/login" className="link-1 link lr">
              Login
            </Link>
          </>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
