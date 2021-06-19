import express from 'express';
import ReviewController from '../controllers/ReviewController';
import auth from '../middlewares/auth';
import use from '../middlewares/use';
const router = express.Router();

router.get('/', use(ReviewController.getReviews));

router.get('/count', use(ReviewController.getTotalCount));

router.post('/create', auth(ReviewController.createReview));

router.post('/:id/thumbsup/increment', use(ReviewController.incrementThumbsUp));

router.post('/:id/thumbsup/decrement', use(ReviewController.decrementThumbsUp));

router.get('/my-reviews', auth(ReviewController.getMyReviews));

export default router;
