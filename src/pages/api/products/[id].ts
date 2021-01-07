import pgPromise from 'pg-promise';
import {DB_COLUMNS} from '../../../constants';
import {getProductDetail} from '../../../sql';
import db from '../../../utils/db';

const PER_PAGE = 20;

export default async (req, res) => {
  try {
    const variationCondition = req.query.variation_id
      ? pgPromise.as.format('WHERE product_variation_id = ${variation_id}', {
          variation_id: req.query.variation_id,
        })
      : '';

    const reviewCondition = req.query.variation_id
      ? pgPromise.as.format('AND product_variation_id = ${variation_id}', {
          variation_id: req.query.variation_id,
        })
      : '';

    const data = await db.instance.oneOrNone(getProductDetail, {
      product_master_id: req.query.id,
      currentPage: req.query.page || 1,
      perPage: PER_PAGE,
      orderBy: req.query.sort || DB_COLUMNS.thumbsup_count,
      variationCondition,
      reviewCondition,
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
