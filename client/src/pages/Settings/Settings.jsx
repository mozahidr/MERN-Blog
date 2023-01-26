import React from 'react';
import './Settings.css';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import dp from '../../images/dp.jpg';

export const Settings = () => {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDelete'>Delete Your Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img src={dp} alt="profilePicture" className='' />
                    <label htmlFor='fileInput'>
                        <i className='settingsPPIcon far fa-user-circle'></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='mozahidarna' required />
                <label>Email</label>
                <input type="email" placeholder='example@gmail.com' required />
                <label>Password</label>
                <input type="password" required />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
