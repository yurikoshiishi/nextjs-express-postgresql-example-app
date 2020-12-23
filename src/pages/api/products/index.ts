import {getProducts} from '../../../sql/sql';
import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const products = await db.instance.any(getProducts);
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
