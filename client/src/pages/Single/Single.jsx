import React from 'react';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { SinglePost } from '../../Components/singlePost/SinglePost';
import './Single.css';

export const Single = () => {
  return (
    <div className='single'>
      {/* POST */}
      <SinglePost />
      <Sidebar />
    </div>
  )
}
