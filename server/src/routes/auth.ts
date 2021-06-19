import express from 'express';
import AuthController from '../controllers/AuthController';
import auth from '../middlewares/auth';
const router = express.Router();

router.get('/check', auth(AuthController.checkAuth));

export default router;
