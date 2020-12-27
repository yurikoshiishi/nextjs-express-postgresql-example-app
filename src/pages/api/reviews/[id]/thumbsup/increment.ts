import {incrementThumbsUp} from '../../../../../sql';
import db from '../../../../../utils/db';

export default async (req, res) => {
  try {
    await db.instance.none(incrementThumbsUp, [req.query.id]);
    res.status(200).json({status: 'success'});
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
