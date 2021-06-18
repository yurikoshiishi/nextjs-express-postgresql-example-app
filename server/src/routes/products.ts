import express from 'express';
import ProductController from '../controllers/ProductController';
import use from '../middlewares/use';
const router = express.Router();

router.get('/', use(ProductController.getProdustMasters));

router.get('/:id', use(ProductController.getProductDetail));

router.get('/:id/variations', use(ProductController.getProductVariations));

export default router;
