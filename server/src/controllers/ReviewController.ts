import {Response} from 'express';
import pgPromise from 'pg-promise';
import {getConnectionManager} from 'typeorm';
import {getFormattedQueryString} from '../sql';
import {CustomRequest} from '../types';

const manager = getConnectionManager();

const PER_PAGE = 10;

//TODO: create db access layer

export default class ReviewController {
  static async getReviews(req: CustomRequest, res: Response) {
    const query = getFormattedQueryString('../sql/getReviews.sql', {
      perPage: PER_PAGE,
      currentPage: (req.query.page || 1).toString(),
    });

    const reviews = await manager.get().query(query);

    res.json(reviews);
  }

  static async getMyReviews(req: CustomRequest, res: Response) {
    const userCondition = pgPromise.as.format('WHERE user_id = ${user_id}', {
      user_id: req.user.uid,
    });

    const query = getFormattedQueryString('../sql/getMyReviews.sql', {
      perPage: PER_PAGE,
      currentPage: (req.query.page || 1).toString(),
      userCondition,
    });

    const reviews = await manager.get().query(query);

    res.json(reviews);
  }

  static async getTotalCount(req: CustomRequest, res: Response) {
    const data = await manager
      .get()
      .query('SELECT COUNT(*) as total_review_count FROM reviews');
    res.json(data);
  }

  static async createReview(req: CustomRequest, res: Response) {
    const query = getFormattedQueryString('../sql/createReview.sql', req.body);

    await manager.get().query(query);
    res.json({status: 'success'});
  }

  static async incrementThumbsUp(req: CustomRequest, res: Response) {
    const query = getFormattedQueryString('../sql/incrementThumbsUpCount.sql', {
      review_id: req.params.id,
    });

    await manager.get().query(query);

    res.json({status: 'success'});
  }

  static async decrementThumbsUp(req: CustomRequest, res: Response) {
    const query = getFormattedQueryString('../sql/decrementThumbsUpCount.sql', {
      review_id: req.params.id,
    });

    await manager.get().query(query);

    res.json({status: 'success'});
  }
}
