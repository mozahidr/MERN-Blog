import React from 'react';
import './SinglePost.css';
import postImg from '../../images/postImg.jpg';

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={postImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Single Post Title
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-sharp fa-solid fa-user-pen"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Mozahid</b>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          quisquam doloribus quibusdam unde nihil quis reprehenderit nemo ab
          animi aut, sequi modi sapiente illum facilis quasi, ipsam perspiciatis
          non. Itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt quisquam doloribus quibusdam unde nihil quis reprehenderit
          nemo ab animi aut, sequi modi sapiente illum facilis quasi, ipsam
          perspiciatis non. Itaque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt quisquam doloribus quibusdam unde nihil
          quis reprehenderit nemo ab animi aut, sequi modi sapiente illum
          facilis quasi, ipsam perspiciatis non. Itaque! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nesciunt quisquam doloribus
          quibusdam unde nihil quis reprehenderit nemo ab animi aut, sequi modi
          sapiente illum facilis quasi, ipsam perspiciatis non. Itaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam
          doloribus quibusdam unde nihil quis reprehenderit nemo ab animi aut,
          sequi modi sapiente illum facilis quasi, ipsam perspiciatis non.
          Itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt quisquam doloribus quibusdam unde nihil quis reprehenderit
          nemo ab animi aut, sequi modi sapiente illum facilis quasi, ipsam
          perspiciatis non. Itaque!
        </p>
      </div>
    </div>
  );
};
