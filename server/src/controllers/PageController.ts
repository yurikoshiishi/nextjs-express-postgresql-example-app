import {Request, Response} from 'express';
import {getConnectionManager} from 'typeorm';
import {getFormattedQueryString} from '../sql';

const manager = getConnectionManager();

const NUMBER_OF_ITEMS = 5;
const NUMBER_OF_REVIEWS = 3;

export default class PageController {
  static async getHomePage(req: Request, res: Response) {
    const query = getFormattedQueryString('../sql/getHomePage.sql', {
      numberOfItems: NUMBER_OF_ITEMS,
      numberOfReviews: NUMBER_OF_REVIEWS,
    });

    const data = await manager.get().query(query);

    res.json(data[0]);
  }
}
