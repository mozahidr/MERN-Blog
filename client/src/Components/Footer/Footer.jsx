import React from 'react';
import './Footer.css';
import g from '../../images/google.png';
import git from '../../images/github.png';
import fb from '../../images/fb.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="signUp">
        <div className='signUpE email'>Sign Up With Email</div>
        <div className='signUpE google'><img src={g} alt="" /> Sign Up With Google</div>
        <div className='signUpE github'><img src={git} alt="" /> Sign Up With Github</div>
        <div className='signUpE fb'><img src={fb} alt="" /> Sign Up With Facebook</div>
      </div>
    </div>
  );
};
