import {getProductVariations} from '../../../../sql';
import db from '../../../../utils/db';

export default async (req, res) => {
  try {
    const data = await db.instance.one(getProductVariations, [req.query.id]);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).end();
  }
};
