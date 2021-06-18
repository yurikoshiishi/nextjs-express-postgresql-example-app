import express from 'express';
import ReviewController from '../controllers/ReviewController';
import auth from '../middlewares/auth';
import use from '../middlewares/use';
const router = express.Router();

router.get('/', use(ReviewController.getReviews));

router.get('/count', use(ReviewController.getTotalCount));

router.get('/:id/thumbsup/increment', use(ReviewController.incrementThumbsUp));

router.get('/:id/thumbsup/decrement', use(ReviewController.decrementThumbsUp));

router.get('/my-reviews', auth(ReviewController.getReviews));

export default router;
