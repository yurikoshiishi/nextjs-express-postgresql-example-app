import {getProductMasters} from '../../../sql/';
import db from '../../../utils/db';
import pgPromise from 'pg-promise';
import {cors} from '../../../utils/middlewares';

const pgp = pgPromise();

export default async (req, res) => {
  try {
    await cors(req, res);
    const condition = getFormattedCondition(pgp, req.query);

    const products = await db.instance.any(getProductMasters, {
      condition,
    });

    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

const getFormattedCondition = (pgp, query: object) => {
  if (Object.keys(query).length === 0) {
    return '';
  }

  const queries = Object.keys(query);

  const rawText = `WHERE ${queries.map((q) => `${q} = $(${q})`).join(' AND ')}`;

  return pgp.as.format(rawText, query);
};
