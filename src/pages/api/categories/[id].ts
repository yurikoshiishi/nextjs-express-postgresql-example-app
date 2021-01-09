import {CATEGORIES} from '../../../constants';
import {getCategoryProducts} from '../../../sql';
import db from '../../../utils/db';
import {cors} from '../../../utils/middlewares';

const PER_PAGE = 20;
const NUMBER_OF_REVIEWS = 4;

export default async (req, res) => {
  try {
    await cors(req, res);
    const {id} = req.query;

    const orderBy = CATEGORIES[id].orderBy;

    if (!orderBy) {
      res.status(404).end();
    }

    const data = await db.instance.many(getCategoryProducts, {
      orderBy: orderBy,
      perPage: PER_PAGE,
      numberOfReviews: NUMBER_OF_REVIEWS,
    });

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
