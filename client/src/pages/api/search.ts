import {getSearchResult} from '../../sql';
import db from '../../utils/db';

const PER_PAGE = 21; //3 column grid

export default async (req, res) => {
  try {
    if (!req.headers.host.includes(process.env.HOST)) {
      return res.status(401).end();
    }

    const result = await db.instance.oneOrNone(getSearchResult, {
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
