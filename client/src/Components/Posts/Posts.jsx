import React from 'react';
import { Post } from '../Post/Post';
import './Posts.css';

export const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      {posts?.map((post) => (
        <Post post={post} />
      ))}
    </div>
    
  )
}
