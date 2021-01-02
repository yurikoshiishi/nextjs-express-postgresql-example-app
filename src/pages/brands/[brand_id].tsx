import React from 'react';
import BrandProductList from '../../components/containers/BrandProductList';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import {ContextWithParams, ProductMaster} from '../../types';
import {fetchBrandProducts} from '../../utils/api';

interface BrandProductsPageProps {
  error: Error | null;
  data: ProductMaster[] | null;
}

const BrandProductsPage: React.FC<BrandProductsPageProps> = ({data}) => {
  const product = data[0];

  const {brand_name_ja} = product;

  const title = `${brand_name_ja}のプロテイン一覧`;
  const description = `${title}(${data.length}件)はこちら。`;

  return (
    <DefaultLayout title={title} description={description}>
      <BrandProductList products={data} brand={brand_name_ja} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const res = await fetchBrandProducts(ctx);

  return {props: {data: res.data, error: res.error}};
};

export default BrandProductsPage;
