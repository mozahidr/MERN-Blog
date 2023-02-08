import React, { useContext, useEffect, useState } from 'react';
import './SinglePost.css';
import postImg from '../../images/postImg.jpg';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context.js';
import { toast, ToastContainer } from 'react-toastify';

export const SinglePost = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  //const PublicFolder = 'http://localhost:5000/images/';
  const PublicFolder = 'https://mern-blog-4tol.onrender.com/images/';
  const username = post.username;
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchPost = async (req, res) => {
      const response = await axios.get('https://mern-blog-4tol.onrender.com/api/posts/' + path);
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.desc);
    };
    fetchPost();
  }, [path]);

  // DELETE POST
  const handleDelete = async (req, res) => {
    try {
      await axios.delete(`https://mern-blog-4tol.onrender.com/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      toast('Delete Successful!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE POST
  const handleUpdate = async () => {
    try {
      await axios.put(`https://mern-blog-4tol.onrender.com/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      toast('Updated post', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={post.photo ? PublicFolder + post.photo : postImg}
          alt={post.title}
          className="singlePostImg"
        />
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-sharp fa-solid fa-user-pen"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-sharp fa-solid fa-trash"
                  onClick={handleDelete}
                ></i>
                
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              {' '}
              <b>{username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows="12"
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button
            className="glow-on-hover singlePostButton"
            type="submit"
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};
