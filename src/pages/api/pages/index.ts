import {getHomePage} from '../../../sql';
import db from '../../../utils/db';

const NUMBER_OF_ITEMS = 5;
const NUMBER_OF_REVIEWS = 3;

export default async (req, res) => {
  try {
    const data = await db.instance.one(getHomePage, {
      numberOfItems: NUMBER_OF_ITEMS,
      numberOfReviews: NUMBER_OF_REVIEWS,
    });

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
