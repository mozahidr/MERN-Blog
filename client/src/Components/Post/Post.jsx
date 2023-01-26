import React from 'react';
import './Post.css';
import postImg from '../../images/postImg.jpg';

export const Post = () => {
  return (
    <div className="post">
      <img src={postImg} alt="postitle" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">MERN blog app post title 1</span>
        <hr />
        <span className="postDate">2 days ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolore
        omnis ullam voluptas nisi? Ipsum quo ut culpa, ab sit quasi sequi quia
        ducimus impedit! Dicta aliquam vero error cumque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolore
        omnis ullam voluptas nisi? Ipsum quo ut culpa, ab sit quasi sequi quia
        ducimus impedit! Dicta aliquam vero error cumque!
      </p>
    </div>
  );
};
