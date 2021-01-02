import {QueryFile} from 'pg-promise';
import {join} from 'path';

const sql = (file) => {
  const fullPath = join(process.cwd(), file);
  return new QueryFile(fullPath, {minify: true});
};

export const getProductMasters = sql('/src/sql/getProductMasters.sql');
export const getProductDetail = sql('/src/sql/getProductDetail.sql');
export const getProductVariations = sql('/src/sql/getProductVariations.sql');
export const incrementThumbsUp = sql('/src/sql/incrementThumbsUpCount.sql');
export const decrementThumbsUp = sql('/src/sql/decrementThumbsUpCount.sql');
export const createReview = sql('/src/sql/createReview.sql');
export const getSearchResult = sql('/src/sql/getSearchResult.sql');
export const getHomePage = sql('/src/sql/getHomePage.sql');
export const getCategoryProducts = sql('/src/sql/getCategoryProducts.sql');
export const getReviews = sql('/src/sql/getReviews.sql');
