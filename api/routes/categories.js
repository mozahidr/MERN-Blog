import express from 'express';
import { createCategory, updateCategory, deleteCategory, getCategory } from '../controllers/category.js';
const router = express.Router();

// CREATE CATEGORY
router.post('/', createCategory);

// UPDATE CATEGORY
router.put('/:id', updateCategory);

// DELETE CATEGORY
router.delete('/:id', deleteCategory);

// GET CATEGORY
router.get('/', getCategory);
export default router;