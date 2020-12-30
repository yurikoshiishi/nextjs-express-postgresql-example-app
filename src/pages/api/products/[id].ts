import {getProductDetail} from '../../../sql';
import db from '../../../utils/db';

const PER_PAGE = 20;

export default async (req, res) => {
  try {
    const productDetail = await db.instance.one(getProductDetail, {
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
