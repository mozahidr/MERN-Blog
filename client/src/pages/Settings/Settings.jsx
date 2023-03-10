import React, { useContext, useState } from 'react';
import './Settings.css';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Context } from '../../context/Context';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  //const PUBLIC_FOLDER = 'http://localhost:5000/images/';
  const PUBLIC_FOLDER = 'https://mern-blog-4tol.onrender.com/images/';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;

      try {
        await axios.post('https://mern-blog-4tol.onrender.com/api/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.put('https://mern-blog-4tol.onrender.com/api/users/' + user._id, updatedUser);
      toast('Profile updated', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : PUBLIC_FOLDER + user.profilePic
              }
              alt="profilePicture"
              className=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          <ToastContainer />
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
