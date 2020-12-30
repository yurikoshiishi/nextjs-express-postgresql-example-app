import {NextApiRequest} from 'next';
import {createReview} from '../../../../sql';
import {hasFalsyValue} from '../../../../utils';
import db from '../../../../utils/db';
import {DUPLICATE_KEY} from '../../../../utils/errors';

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

    if (e.code === DUPLICATE_KEY) {
      res.status(400).send({
        message:
          '過去に選択した風味のレビューを投稿済みです。各商品1風味あたり1回のみ投稿できます。',
      });
    } else {
      res.status(500).end();
    }
  }
};