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

  return `${AMAZON_SERCH_URL}?keywords=${brand} ${name}`;
};