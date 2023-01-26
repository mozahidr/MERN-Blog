import mongoose from 'mongoose';
import Post from '../models/Post.js';
import User from '../models/User.js';

// CREATE POST
export const createPost = async (req, res) => {
  const newPost = await Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE POST
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatePost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res
        .status(401)
        .json({ message: 'You are not allow to update this post' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE POST
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json({ message: 'Post has been deleted' });
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res
        .status(401)
        .json({ message: 'You are not allow to delete this post' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET POST BY ID
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
// GET ALL POST
export const getAllPost = async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username }); // username: username = {username} same
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category], // inside the category array find the cat name and assign it to the posts
        },
      });
    } else {
        posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
