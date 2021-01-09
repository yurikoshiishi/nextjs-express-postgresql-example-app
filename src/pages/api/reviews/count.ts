import db from '../../../utils/db';
import {cors} from '../../../utils/middlewares';

export default async (req, res) => {
  await cors(req, res);
  try {
    const data = await db.instance.one(
      'SELECT COUNT(*) as total_review_count FROM reviews'
    );
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
