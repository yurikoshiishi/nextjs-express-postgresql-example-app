import {NextPageContext} from 'next';
import React from 'react';
import ProductDetailContainer from '../../components/containers/ProductDetailContainer';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import {ProductDetail, ContextWithParams} from '../../types';
import {getProductNameWithBrand} from '../../utils';
import {fetchProductDetail} from '../../utils/api';

interface ProductDetailPageProps {
  productDetail: ProductDetail;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productDetail,
}) => {
  const title = `${getProductNameWithBrand(productDetail)}のレビュー`;
  const description = `${getProductNameWithBrand(
    productDetail
  )}の味や溶けやすさに関するレビューをお探しの方はこちら！${
    productDetail.review_count > 0
      ? `信頼性の高いレビューが${productDetail.review_count}件集まっています。`
      : ''
  } その他にも様々なプロテインメーカー・味のレビューあり`;

  return (
    <DefaultLayout title={title} description={description}>
      <ProductDetailContainer productDetail={productDetail} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const data = await fetchProductDetail(ctx);

  return {props: {productDetail: data}};
};

export default ProductDetailPage;
