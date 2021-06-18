import {Request, Response} from 'express';
import pgPromise from 'pg-promise';
import {getConnectionManager} from 'typeorm';
import {getFormattedQueryString, getFormattedCondition} from '../sql';

const manager = getConnectionManager();

const PER_PAGE = 20;

const DB_COLUMNS = {
  thumbsup_count: 'thumbsup_count',
  created_at: 'created_at',
  total_rating: 'total_rating',
};

//TODO: create db access layer

export default class ProductController {
  static async getProdustMasters(req: Request, res: Response) {
    const condition = getFormattedCondition(req.query);

    const query = getFormattedQueryString('../sql/getProductMasters.sql', {
      condition,
    });

    const products = await manager.get().query(query);

    res.json(products);
  }

  static async getProductDetail(req: Request, res: Response) {
    const variationCondition = req.query.variation_id
      ? pgPromise.as.format('WHERE product_variation_id = ${variation_id}', {
          variation_id: req.query.variation_id,
        })
      : '';

    const reviewCondition = req.query.variation_id
      ? pgPromise.as.format('AND product_variation_id = ${variation_id}', {
          variation_id: req.query.variation_id,
        })
      : '';

    const query = getFormattedQueryString('../sql/getProductDetail.sql', {
      product_master_id: req.params.id,
      currentPage: (req.query.page || 1).toString(),
      perPage: PER_PAGE,
      orderBy: (req.query.sort || DB_COLUMNS.thumbsup_count).toString(),
      variationCondition,
      reviewCondition,
    });

    const products = await manager.get().query(query);

    res.json(products);
  }

  static async searchProducts(req: Request, res: Response) {
    const query = getFormattedQueryString('../sql/getSearchResult.sql', {
      query: decodeURIComponent(req.query.q.toString()).toLowerCase(),
      perPage: PER_PAGE,
      currentPage: (req.query.page || 1).toString(),
    });

    const result = await manager.get().query(query);

    res.json(result);
  }
}
