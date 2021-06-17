import db from '../../../utils/db';

export default async (req, res) => {
  try {
    if (!req.headers.host.includes(process.env.HOST)) {
      return res.status(401).end();
    }
    const data = await db.instance.one(
      'SELECT COUNT(*) as total_review_count FROM reviews'
    );
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
