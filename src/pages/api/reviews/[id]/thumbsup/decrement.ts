import {NextApiRequest} from 'next';
import {decrementThumbsUp} from '../../../../../sql';
import db from '../../../../../utils/db';
import {cors} from '../../../../../utils/middlewares';

export default async (req: NextApiRequest, res) => {
  await cors(req, res);
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
