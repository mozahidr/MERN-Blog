import mongoose from 'mongoose';
import User from '../models/User.js';
import Post from '../models/Post.js';
import bcrypt from 'bcryptjs';

// GET USER
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err);
    }
}

// UPDATE USER
export const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ message: 'Updated successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(401)
      .json({ message: 'You do not have permission to update this user.' });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    // delete all the posts of this user
    try {
        const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'User deleted successfully' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    } catch (err) {

    }
  } else {
    res
      .status(401)
      .json({ message: 'You do not have permission to delete this user.' });
  }
};
