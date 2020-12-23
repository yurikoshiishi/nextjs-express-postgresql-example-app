import db from '../../../utils/db';

export default async (req, res) => {
  try {
    res.send(req.query);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
