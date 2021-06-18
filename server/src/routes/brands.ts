import express from 'express';
import BrandController from '../controllers/BrandController';
import use from '../middlewares/use';
const router = express.Router();

router.get('/', use(BrandController.getBrands));

export default router;
