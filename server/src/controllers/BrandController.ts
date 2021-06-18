import {Request, Response} from 'express';
import {getConnectionManager} from 'typeorm';
import {readSqlFile} from '../sql';

const manager = getConnectionManager();

export default class BrandController {
  static async getBrands(req: Request, res: Response) {
    const brands = await manager
      .get()
      .query(readSqlFile('../sql/getBrands.sql'));
    res.status(200).json(brands);
  }
}
