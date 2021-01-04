import axios, {AxiosError, AxiosResponse} from 'axios';
import {NextApiRequestQuery} from 'next/dist/next-server/server/api-utils';
import {ContextWithParams, ProductMaster, ReviewFormValues} from '../types';
import firebaseClient from './firebaseClient';

axios.defaults.withCredentials = true;

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

const getParamFromQuery = (query: NextApiRequestQuery, prefix?: '?' | '&') => {
  if (Object.keys(query).length === 0) {
    return '';
  }

  let start = prefix ? prefix : '?';

  return (
    start +
    Object.entries(query)
      .map((query) => `${query[0]}=${query[1]}`)
      .join('&')
  );
};

export interface ApiResponse {
  data: any;
  error: Error | null;
}

export interface Error {
  status?: string | number;
  statusText?: string;
  data?: {[key: string]: any; message?: string} | null;
}

const handleError = (error: AxiosError) => {
  const {response} = error;
  return {
    data: null,
    error: {
      status: response?.status || '',
      statusText: response?.statusText || '',
      data: response?.data || {},
    },
  };
};

const handleResponse = (res: AxiosResponse) => {
  return {data: res.data, error: null};
};

export const fetchProductMasters = async (req): Promise<ProductMaster[]> => {
  const res = await axios.get(`${getAbsoluteUrl(req).origin}/api/products`);
  const products: ProductMaster[] = res.data;
  return products;
};

export const fetchProductDetail = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios(
    `${getAbsoluteUrl(ctx.req).origin}/api/products/${ctx.params.id}?page=${
      ctx.query.page || 1
    }${getParamFromQuery(ctx.query, '&')}`
  )
    .then(handleResponse)
    .catch(handleError);
};

export const fetchProductVariations = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(`${getAbsoluteUrl(ctx.req).origin}/api/reviews/${ctx.params.id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const incrementThumbsUp = async (review_id) => {
  const res = await axios.post(
    `${window.origin}/api/reviews/${review_id}/thumbsup/increment`
  );
  return res.data;
};

export const decrementThumbsUp = async (review_id) => {
  const res = await axios.post(
    `${window.origin}/api/reviews/${review_id}/thumbsup/decrement`
  );
  return res.data;
};

export const createReview = async (
  formValues: ReviewFormValues
): Promise<ApiResponse> => {
  const {product_master_id} = formValues;

  let token;
  try {
    token = await firebaseClient.auth().currentUser.getIdToken();
  } catch (err) {
    throw new Error('not authorized');
  }

  return axios
    .post(`${window.origin}/api/reviews/${product_master_id}/create`, {
      ...formValues,
      token,
    })
    .then(handleResponse)
    .catch(handleError);
};

export const fetchSearchResult = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(
      `${getAbsoluteUrl(ctx.req).origin}/api/search?q=${ctx.query.q}&page=${
        ctx.query.page || 1
      }`
    )
    .then(handleResponse)
    .catch(handleError);
};

export const fetchHomePage = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(`${getAbsoluteUrl(ctx.req).origin}/api/pages/`)
    .then(handleResponse)
    .catch(handleError);
};

export const fetchCategoryProducts = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(`${getAbsoluteUrl(ctx.req).origin}/api/categories/${ctx.query.id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const fetchBrandProducts = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(
      `${getAbsoluteUrl(ctx.req).origin}/api/products?brand_id=${
        ctx.query.brand_id
      }`
    )
    .then(handleResponse)
    .catch(handleError);
};

export const fetchBrands = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(`${getAbsoluteUrl(ctx.req).origin}/api/brands`)
    .then(handleResponse)
    .catch(handleError);
};
