import axios from 'axios';
import {ProductDetailContext, ProductMaster} from '../types';

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
): Promise<object> => {
  const res = await axios(
    `${getAbsoluteUrl(ctx.req).origin}/api/products/${ctx.params.id}`
  );
  const productDetail = res.data;
  return {productDetail};
};