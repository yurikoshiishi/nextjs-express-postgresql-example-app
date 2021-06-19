import {NextFunction, Response} from 'express';
import firebase from '../config/firebase';
import {CustomRequest} from '../types';

const auth =
  (fn: (req: CustomRequest, res: Response, next: NextFunction) => any) =>
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    let user;

    try {
      user = await firebase.auth().verifyIdToken(req.query.token?.toString());
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

    req.user = user;

    fn(req, res, next);
  };

export default auth;
