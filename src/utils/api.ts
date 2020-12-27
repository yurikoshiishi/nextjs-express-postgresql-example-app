import axios from 'axios';
import {ProductDetail, ProductDetailContext, ProductMaster} from '../types';

const getAbsoluteUrl = (req, setLocalhost?: string) => {
  var protocol = 'https:';
  var host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host;
  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = 'http:';
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
  };
};

export const fetchProductMasters = async (req): Promise<ProductMaster[]> => {
  const res = await axios(`${getAbsoluteUrl(req).origin}/api/products`);
  const products: ProductMaster[] = res.data;
  return products;
};

export const fetchProductDetail = async (
  ctx: ProductDetailContext
): Promise<ProductDetail> => {
  const res = await axios(
    `${getAbsoluteUrl(ctx.req).origin}/api/products/${ctx.params.id}?page=${
      ctx.query.page || 1
    }`
  );
  const productDetail = res.data;
  return productDetail;
};

export const incrementThumbsUp = async (review_id) => {
  const res = await axios(
    `${window.origin}/api/reviews/${review_id}/thumbsup/increment`
  );
  return res.data;
};

export const decrementThumbsUp = async (review_id) => {
  const res = await axios(
    `${window.origin}/api/reviews/${review_id}/thumbsup/decrement`
  );
  return res.data;
};
