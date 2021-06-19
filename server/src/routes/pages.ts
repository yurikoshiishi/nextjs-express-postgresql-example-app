import express from 'express';
import PageController from '../controllers/PageController';
import use from '../middlewares/use';
const router = express.Router();

router.get('/home', use(PageController.getHomePage));

export default router;
