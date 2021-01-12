import db from '../../../utils/db';
import {getMyReviews} from '../../../sql';
import pgPromise from 'pg-promise';
import firebaseAdmin from '../../../utils/firebaseAdmin';

const PER_PAGE = 10;

export default async (req, res) => {
  try {
    if (!req.headers.host.includes(process.env.HOST)) {
      return res.status(401).end();
    }

    let user;
    try {
      user = await firebaseAdmin.auth().verifyIdToken(req.query.token);
    } catch (err) {
      console.log(err);
      return res.status(401).send({
        message: 'レビューを閲覧するにはログインが必要です。',
      });
    }

    if (!user || !user.uid) {
      return res.status(401).send({
        message: 'レビューを閲覧するにはログインが必要です。',
      });
    }

    const userCondition = pgPromise.as.format('WHERE user_id = ${user_id}', {
      user_id: user.uid,
    });

    const data = await db.instance.oneOrNone(getMyReviews, {
      perPage: PER_PAGE,
      currentPage: req.query.page || 1,
      userCondition,
    });

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
