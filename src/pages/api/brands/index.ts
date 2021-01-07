import {getBrands} from '../../../sql';
import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const data = await db.instance.any(getBrands);

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
