import {NextPageContext} from 'next';
import React from 'react';
import {ProductDetailContext} from '../../types';
import {fetchProductDetail} from '../../utils/api';

interface ProductDetailPageProps {}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({}) => {
  return <div>product</div>;
};

export const getServerSideProps = async (ctx: ProductDetailContext) => {
  const productDetail = await fetchProductDetail(ctx);
  return {props: {productDetail}};
};

export default ProductDetailPage;
