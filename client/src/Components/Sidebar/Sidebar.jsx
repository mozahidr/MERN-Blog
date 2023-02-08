import React, { useContext } from 'react';
import './Sidebar.css';
import dp from '../../images/dp.jpg';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export const Sidebar = () => {
  const { user } = useContext(Context);
  //const PUBLIC_FOLDER = 'http://localhost:5000/images/';
  const PUBLIC_FOLDER = 'https://mern-blog-4tol.onrender.com/images/';
  const [catName, setCatName] = useState([]);

  useEffect(() => {
    const fetCategories = async (req, res) => {
      const response = await axios.get('https://mern-blog-4tol.onrender.com/api/categories');
      setCatName(response.data);
    };
    fetCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src={user?.profilePic ? PUBLIC_FOLDER + user.profilePic : dp}
          alt="dp"
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          molestiae consequatur laudantium dolorem.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {catName?.map((category) => (
            <Link to={`/?category=${category.name}`} className="link">
              <li className="sidebarListItem">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
  );
};
