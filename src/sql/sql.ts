import {QueryFile} from 'pg-promise';
import {join} from 'path';

const sql = (file) => {
  const fullPath = join(process.cwd(), file);
  return new QueryFile(fullPath, {minify: true});
};

export const getProducts = sql('/src/sql/getProducts.sql');
