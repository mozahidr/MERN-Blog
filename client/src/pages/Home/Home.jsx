import React, { useState, useEffect } from 'react';
import { Header } from '../../Components/Header/Header';
import { Posts } from '../../Components/Posts/Posts';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './Home.css';
import axios from 'axios';
import { Footer } from '../../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 500 ? setVisible(true) : setVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://mern-blog-4tol.onrender.com/api/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
        <i className="arr fa fa-arrow-circle-up" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}></i>
      </div>
      <Footer />
      
    </>
  );
};
