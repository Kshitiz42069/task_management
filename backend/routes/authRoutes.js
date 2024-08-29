import express from 'express';
import { login, logout, signin } from '../controllers/authController.js';


const router = express.Router();

router.post('/login',login);
router.post('/signin',signin);
router.post('/logout',logout);

export default router;