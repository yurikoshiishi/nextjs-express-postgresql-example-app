import express from 'express';
import ProductController from '../controllers/ProductController';
import use from '../middlewares/use';
const router = express.Router();

router.get('/', use(ProductController.searchProducts));

export default router;
