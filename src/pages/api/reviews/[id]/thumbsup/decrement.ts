import {NextApiRequest} from 'next';
import {decrementThumbsUp} from '../../../../../sql';
import db from '../../../../../utils/db';

export default async (req: NextApiRequest, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).end();
    }
    await db.instance.none(decrementThumbsUp, [req.query.id]);
    res.status(200).json({status: 'success'});
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
