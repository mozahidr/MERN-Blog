import React from 'react';
import './Header.css';
import headerBg from '../../images/headerBg.webp'

export const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React and Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={headerBg} alt="homebg" />
    </div>
  )
}
