import {NextApiRequest} from 'next';
import {createReview} from '../../../../sql';
import {hasFalsyValue} from '../../../../utils';
import db from '../../../../utils/db';

export default async (req: NextApiRequest, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).end();
    }
    if (hasFalsyValue(req.body)) {
      res.status(400).end();
    }

    await db.instance.none(createReview, req.body);
    res.status(200).json({status: 'success'});
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
