import React from 'react';
import ProductDetailContainer from '../../components/containers/ProductDetailContainer';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import {ProductDetail, ContextWithParams} from '../../types';
import {getProductNameWithBrand} from '../../utils';
import {fetchProductDetail} from '../../utils/api';

interface ProductDetailPageProps {
  error: Error | null;
  data: ProductDetail | null;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({data}) => {
  const title = `${getProductNameWithBrand(data)}のレビュー`;
  const description = `${getProductNameWithBrand(
    data
  )}の味や溶けやすさに関するレビューをお探しの方はこちら！${
    data.review_count > 0
      ? `信頼性の高いレビューが${data.review_count}件集まっています。`
      : ''
  } その他にも様々なプロテインメーカー・味のレビューあり。`;

  return (
    <DefaultLayout title={title} description={description}>
      <ProductDetailContainer productDetail={data} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const res = await fetchProductDetail(ctx);

  return {props: {data: res.data, error: res.error}};
};

export default ProductDetailPage;
