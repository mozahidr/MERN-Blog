import React from 'react';
import './Post.css';
import postImg from '../../images/postImg.jpg';
import { Link } from 'react-router-dom';

export const Post = ({ post }) => {
  //const PublicFolder = "http://localhost:5000/images/"
  const PublicFolder = "https://mern-blog-4tol.onrender.com/images/"
  return (
    <div className="post">
      <Link to={`/postDetails/${post._id}`} className="link">
        <img
          src={post.photo ? PublicFolder + post.photo : postImg}
          alt="postitle"
          title={post.title}
          className="postImg"
        />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => (
            <span className="postCat">{cat?.name}</span>
          ))}
        </div>
        <Link to={`/postDetails/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};
