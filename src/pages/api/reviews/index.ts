import db from '../../../utils/db';
import {getReviews} from '../../../sql';
import {cors} from '../../../utils/middlewares';

const PER_PAGE = 10;

export default async (req, res) => {
  await cors(req, res);
  try {
    const reviews = await db.instance.any(getReviews, {
      perPage: PER_PAGE,
      currentPage: req.query.page || 1,
    });
    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
