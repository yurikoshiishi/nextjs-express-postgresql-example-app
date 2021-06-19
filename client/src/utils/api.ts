import axios, {AxiosError, AxiosResponse} from 'axios';
import {NextApiRequestQuery} from 'next/dist/next-server/server/api-utils';
import {ContextWithParams, ReviewFormValues} from '../types';
import firebaseClient from './firebaseClient';

const getParamFromQuery = (
  query: NextApiRequestQuery,
  blacklist: string[] = [],
  prefix?: '?' | '&'
) => {
  if (Object.keys(query).length === 0) {
    return '';
  }

  let start = prefix ? prefix : '?';

  return (
    start +
    Object.entries(query)
      .filter((query) => !blacklist.includes(query[0]))
      .map((query) => `${query[0]}=${query[1]}`)
      .join('&')
  );
};

export const getBaseURL = () => {
  if (typeof window === 'undefined') {
    return process.env.API_BASE_URL;
  }

  return process.env.NEXT_PUBLIC_API_BASE_URL;
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

export const fetchProductDetail = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios(
    `${getBaseURL()}/api/products/${ctx.params.product_id}?page=${
      ctx.query.page || 1
    }${getParamFromQuery(ctx.query, ['page'], '&')}`
  )
    .then(handleResponse)
    .catch(handleError);
};

export const fetchProductVariations = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(`${getBaseURL()}/api/products/${ctx.params.id}/variations`)
    .then(handleResponse)
    .catch(handleError);
};

export const incrementThumbsUp = async (review_id) => {
  const res = await axios.post(
    `${getBaseURL()}/api/reviews/${review_id}/thumbsup/increment`
  );
  return res.data;
};

export const decrementThumbsUp = async (review_id) => {
  const res = await axios.post(
    `${getBaseURL()}/api/reviews/${review_id}/thumbsup/decrement`
  );
  return res.data;
};

export const createReview = async (
  formValues: ReviewFormValues
): Promise<ApiResponse> => {
  let token;
  try {
    token = await firebaseClient.auth().currentUser.getIdToken();
  } catch (err) {
    throw new Error('not authorized');
  }

  return axios
    .post(
      `${getBaseURL()}/api/reviews/create`,
      {
        ...formValues,
        token,
      },
      {
        params: {
          token,
        },
      }
    )
    .then(handleResponse)
    .catch(handleError);
};

export const fetchMyReviews = async (page: number): Promise<ApiResponse> => {
  let token;
  try {
    token = await firebaseClient.auth().currentUser.getIdToken();
  } catch (err) {
    throw new Error('not authorized');
  }

  return axios
    .get(`${getBaseURL()}/api/reviews/my-reviews`, {
      params: {
        token,
        page: page || 1,
      },
    })
    .then(handleResponse)
    .catch(handleError);
};

export const fetchSearchResult = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(
      `${getBaseURL()}/api/search?q=${ctx.query.q}&page=${ctx.query.page || 1}`
    )
    .then(handleResponse)
    .catch(handleError);
};

export const fetchHomePage = async (): Promise<ApiResponse> => {
  return axios
    .get(`${getBaseURL()}/api/pages/home`)
    .then(handleResponse)
    .catch(handleError);
};

export const fetchCategoryProducts = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(`${getBaseURL()}/api/products/categories/${ctx.query.id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const fetchBrandProducts = async (
  ctx: ContextWithParams
): Promise<ApiResponse> => {
  return axios
    .get(`${getBaseURL()}/api/products?brand_id=${ctx.query.brand_id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const fetchBrands = async (): Promise<ApiResponse> => {
  return axios
    .get(`${getBaseURL()}/api/brands`)
    .then(handleResponse)
    .catch(handleError);
};

export const fetchSitemapData = async (): Promise<ApiResponse> => {
  return axios
    .get(`${getBaseURL()}/api/sitemap`)
    .then(handleResponse)
    .catch(handleError);
};

export const checkAuth = async (token): Promise<ApiResponse> => {
  return axios
    .get(`${getBaseURL()}/api/auth/check`, {
      params: {
        token,
      },
    })
    .then(handleResponse)
    .catch(handleError);
};
