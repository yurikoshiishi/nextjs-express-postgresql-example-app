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

export interface ProductDetail extends ProductMaster {
  product_variation_ids: string[];
  flavors: string[];
  reviews: Review[];
}

export interface Review {
  review_id: string;
  product_master_id: string;
  product_variation_id: string;
  taste_rating: number;
  mix_rating: number;
  total_rating: number;
  description: string;
  created_at: Date;
}

export interface ProductDetailContext extends NextPageContext {
  params: {
    id: string;
  };
}
