import {NextPageContext} from 'next';
import firebaseClient from './utils/firebaseClient';

export interface HomePageData {
  top_rated: ProductMasterWithReview[];
  most_reviewed: ProductMasterWithReview[];
}

export interface ProductMasterWithReview extends ProductMaster {
  reviews: Review[];
}

export interface Brand {
  brand_id: string;
  brand_name_ja: string;
  brand_name_en: string;
}

export interface ProductMaster {
  product_master_id: string;
  brand_id: string;
  name: string;
  brand_name_ja: string;
  brand_name_en: string;
  url_amazon?: string;
  url_myprotein?: string;
  url_iherb?: string;
  variation_count: number;
  flavors: string;
  review_count: number;
  avg_taste_rating: number;
  avg_mix_rating: number;
  avg_total_rating: number;
  created_at: string;
  updated_at: string;
}

export interface ProductVariation {
  product_master_id: string;
  product_variation_id: string;
  brand_id: string;
  flavor: string;
  url_amazon?: string;
  url_myprotein?: string;
  url_iherb?: string;
}

export interface ProductDetail extends ProductMaster {
  product_variations: ProductVariation[];
  reviews: Review[];
  review_page_count: number;
  review_summary: ReviewSummary;
  related_product_masters: ProductMaster[];
}

export interface ProductVariations {
  product_master_id: string;
  brand_id: string;
  name: string;
  brand_name_ja: string;
  brand_name_en: string;
  url_amazon?: string;
  url_myprotein?: string;
  url_iherb?: string;
  product_variations: ProductVariation[];
}

export interface SearchResult {
  product_count: number;
  page_count: number;
  product_masters: ProductMaster[];
}

export interface Review {
  review_id: string;
  product_master_id: string;
  product_variation_id: string;
  flavor: string;
  taste_rating: number;
  mix_rating: number;
  total_rating: number;
  description: string;
  url_amazon: string;
  url_iherb: string;
  url_myprotein: string;
  thumbsup_count: number;
  created_at: string;
}

export interface ReviewSummary {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface ReviewFormValues {
  product_master_id: string;
  product_variation_id: string;
  user_id?: string;
  taste_rating: number;
  mix_rating: number;
  total_rating: number;
  description: string;
}

export interface ContextWithParams extends NextPageContext {
  params: {
    [key: string]: string;
  };
}

export type FirebaseUser = firebaseClient.User | null;

export type MuiTypography =
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'overline'
  | 'srOnly';
