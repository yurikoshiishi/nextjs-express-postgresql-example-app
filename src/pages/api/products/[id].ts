import {getProductDetail} from '../../../sql';
import db from '../../../utils/db';

const PER_PAGE = 20;

export default async (req, res) => {
  try {
    const data = await db.instance.oneOrNone(getProductDetail, {
      product_master_id: req.query.id,
      currentPage: req.query.page || 1,
      perPage: PER_PAGE,
    });

    if (!data) {
      res.status(404).end();
    }

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
