import {getSitemapData} from '../../sql';
import db from '../../utils/db';

export default async (req, res) => {
  try {
    if (!req.headers.host.includes(process.env.HOST)) {
      return res.status(401).end();
    }

    const result = await db.instance.one(getSitemapData);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
