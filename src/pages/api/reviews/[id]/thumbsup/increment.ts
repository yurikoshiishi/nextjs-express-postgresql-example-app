import {NextApiRequest} from 'next';
import {incrementThumbsUp} from '../../../../../sql';
import db from '../../../../../utils/db';

export default async (req: NextApiRequest, res) => {
  try {
    if (!req.headers.host.includes(process.env.HOST)) {
      return res.status(401).end();
    }
    if (req.method !== 'POST') {
      res.status(405).end();
    }
    await db.instance.none(incrementThumbsUp, [req.query.id]);
    res.status(200).json({status: 'success'});
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
