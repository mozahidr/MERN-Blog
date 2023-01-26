import mongoose from 'mongoose';
import Category from '../models/Category.js';

// CREATE CATEGORY
export const createCategory = async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory);
    } catch (err) {
        res.status(500).json(err);
    }
}
// UPDATE CATEGORY
export const updateCategory = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
}
// DELETE CATEGORY
export const deleteCategory = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
}

// GET CATEGORY
export const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
}