import {Request, Response} from 'express';
import {getConnectionManager} from 'typeorm';
import {readSqlFile} from '../sql';

const manager = getConnectionManager();

//TODO: create db access layer

export default class SitemapController {
  static async getSitemapData(req: Request, res: Response) {
    const query = readSqlFile('../sql/getSitemapData.sql');

    const data = await manager.get().query(query);

    res.json(data);
  }
}
