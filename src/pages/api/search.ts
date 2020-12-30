import {getSearchResult} from '../../sql';
import db from '../../utils/db';

const PER_PAGE = 20;

export default async (req, res) => {
  try {
    const result = await db.instance.one(getSearchResult, {
      query: decodeURIComponent(req.query.q).toLowerCase(),
      perPage: PER_PAGE,
      currentPage: req.query.page || 1,
    });
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
