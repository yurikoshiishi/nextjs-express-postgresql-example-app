import {NextApiRequest} from 'next';
import {createReview} from '../../../../sql';
import {hasFalsyValue} from '../../../../utils';
import db from '../../../../utils/db';
import {DUPLICATE_KEY} from '../../../../utils/errors';
import firebaseAdmin from '../../../../utils/firebaseAdmin';
import {cors} from '../../../../utils/middlewares';

export default async (req: NextApiRequest, res) => {
  try {
    await cors(req, res);
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    if (hasFalsyValue(req.body)) {
      return res.status(400).end();
    }

    try {
      await firebaseAdmin.auth().verifyIdToken(req.body.token);
    } catch (err) {
      console.log(err);
      return res.status(401).send({
        message: 'レビューを投稿するにはログインが必要です。',
      });
    }

    await db.instance.none(createReview, req.body);
    res.status(200).json({status: 'success'});
  } catch (err) {
    console.error(err);

    if (err.code == DUPLICATE_KEY) {
      res.status(400).send({
        message:
          '過去に選択した風味のレビューを投稿済みです。各商品1風味あたり1回のみ投稿できます。',
      });
    } else {
      res.status(500).end();
    }
  }
};
