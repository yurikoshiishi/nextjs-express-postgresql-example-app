import {QueryFile} from 'pg-promise';
import {join} from 'path';

const sql = (file) => {
  const fullPath = join(process.cwd(), file);
  return new QueryFile(fullPath, {minify: true});
};

export const fetchProductMasters = sql('/src/sql/fetchProductMasters.sql');
export const fetchProductDetail = sql('/src/sql/fetchProductDetail.sql');
