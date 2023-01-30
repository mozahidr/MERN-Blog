import React, { useState, useEffect } from 'react';
import { Header } from '../../Components/Header/Header';
import { Posts } from '../../Components/Posts/Posts';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './Home.css';
import axios from 'axios';
import { Footer } from '../../Components/Footer/Footer';

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      console.log(res);
    }
    fetchPosts();
  }, [])
  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};
