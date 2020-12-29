import React from 'react';
import ProductDetailContainer from '../../components/containers/ProductDetailContainer';
import {ProductDetail, ContextWithParams} from '../../types';
import {fetchProductDetail} from '../../utils/api';

interface ProductDetailPageProps {
  productDetail: ProductDetail;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productDetail,
}) => {
  return (
    <div>
      <ProductDetailContainer productDetail={productDetail} />
    </div>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const data = await fetchProductDetail(ctx);

  return {props: {productDetail: data}};
};

export default ProductDetailPage;
