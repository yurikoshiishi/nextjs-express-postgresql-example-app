import {getBrands} from '../../../sql';
import db from '../../../utils/db';
import {cors} from '../../../utils/middlewares';

export default async (req, res) => {
  try {
    await cors(req, res);
    const data = await db.instance.any(getBrands);

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
