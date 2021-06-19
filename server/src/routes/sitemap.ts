import express from 'express';
import SitemapController from '../controllers/SitemapController';
import use from '../middlewares/use';
const router = express.Router();

router.get('/', use(SitemapController.getSitemapData));

export default router;
