import express from 'express';
import { createPost, updatePost, deletePost, getPost, getAllPost } from '../controllers/post.js';

const router = express.Router();

// CREATE NEW POST
router.post('/', createPost);

// UPDATE POST 
router.put('/:id', updatePost);

// DELETE POST
router.delete('/:id', deletePost);

// GET POST BY POST ID
router.get('/:id', getPost);

// GET ALL POSTS
router.get('/', getAllPost);

export default router;