import {NextPageContext} from 'next';

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
  review_count: number;
  avg_taste_rating: number;
  avg_mix_rating: number;
  avg_total_rating: number;
}

export interface ProductVariation {
  product_master_id: string;
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
  created_at: string;
}

export interface ReviewSummary {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface ProductDetailContext extends NextPageContext {
  params: {
    id: string;
  };
}
