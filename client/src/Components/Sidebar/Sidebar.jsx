import React from 'react';
import './Sidebar.css';
import dp from '../../images/dp.jpg';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={dp} alt="dp" className='sidebarImg' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          molestiae consequatur laudantium dolorem.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Business</li>
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
