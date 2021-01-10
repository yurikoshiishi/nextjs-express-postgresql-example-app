const AMAZON_SERCH_URL =
  'https://www.amazon.co.jp/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&tag=protein-review-22&index=aps&camp=247&creative=1211&linkCode=ur2&linkId=ee423e1618278dbcc3bd704ea6f7f575';

export const getAmazonUrl = (
  brand: string,
  name: string,
  url?: string
): string => {
  if (url) {
    return url;
  }

  return `${AMAZON_SERCH_URL}&keywords=${brand} ${name}`;
};

export const getProductNameWithBrand = (productData: {
  brand_name_ja?: string;
  brand_name_en?: string;
  name?: string;
}): string => {
  if (!productData || Object.keys(productData).length === 0) {
    return '';
  }

  const {brand_name_ja, brand_name_en, name} = productData;

  const brand = `${
    brand_name_ja ? brand_name_ja : brand_name_en ? brand_name_en : ''
  }`;

  return `${brand} ${name || ''}`;
};

export const hasFalsyValue = (obj: object): boolean => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  return Object.values(obj).some((val) => !Boolean(val));
};

export const getSlicedString = (text: string, limit: number): string => {
  if (!text || !limit) {
    return '';
  }
  if (text.length > limit) {
    return text.substring(0, limit - 1) + '...';
  }

  return text;
};

export const getNumberWithCommas = (x: number | string): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
