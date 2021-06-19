import {Response} from 'express';
import {CustomRequest} from '../types';

export default class AuthController {
  static async checkAuth(req: CustomRequest, res: Response) {
    if (req.user) {
      res.json({status: 'success'});
    }

    res.status(401).send();
  }
}
