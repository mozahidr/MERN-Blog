import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.js';

const router = express.Router();

// REGISTER USER
router.post('/register', registerUser);

// LOGIN USER
router.post('/login', loginUser);

export default router;