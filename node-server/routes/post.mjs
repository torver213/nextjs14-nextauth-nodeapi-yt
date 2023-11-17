import express from 'express';
import PostController from '../controllers/post.mjs';
import { authenticateUser } from '../middleware/index.mjs';

const router = express.Router();


router.get('/posts', authenticateUser,  PostController.getPostsController )

export default router