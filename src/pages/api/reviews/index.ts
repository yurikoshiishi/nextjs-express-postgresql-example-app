import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const reviews = await db.instance.any('select * from reviews;');
    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
