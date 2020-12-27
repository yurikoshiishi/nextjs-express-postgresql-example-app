import React from 'react';
import ProductDetailContainer from '../../components/ProductDetailContainer';
import {ProductDetail, ProductDetailContext} from '../../types';
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

export const getServerSideProps = async (ctx: ProductDetailContext) => {
  const data = await fetchProductDetail(ctx);

  return {props: {productDetail: data}};
};

export default ProductDetailPage;
