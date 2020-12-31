import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getHomePage} from '../sql';
import {
  ContextWithParams,
  ProductDetail,
  ProductMaster,
  ReviewFormValues,
} from '../types';
import db from './db';

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
    }`
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
  return axios
    .post(
      `${window.origin}/api/reviews/${product_master_id}/create`,
      formValues
    )
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
