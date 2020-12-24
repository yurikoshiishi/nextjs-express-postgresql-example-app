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
  const productDetail = await fetchProductDetail(ctx);
  return {props: productDetail};
};

export default ProductDetailPage;
