import {fetchProductDetail} from '../../../sql';
import db from '../../../utils/db';

const PER_PAGE = 50;

export default async (req, res) => {
  try {
    const productDetail = await db.instance.one(fetchProductDetail, {
      product_master_id: req.query.id,
      currentPage: req.query.page || 1,
      perPage: PER_PAGE,
    });
    res.status(200).json(productDetail);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
