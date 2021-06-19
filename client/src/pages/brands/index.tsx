import React from 'react';
import BrandList from '../../components/containers/BrandList';
import SidebarLayout from '../../components/layouts/SiderbarLayout';
import {Brand, ContextWithParams} from '../../types';
import {fetchBrands} from '../../utils/api';

interface BrandProductsPageProps {
  error: Error | null;
  data: Brand[] | null;
}

const BrandProductsPage: React.FC<BrandProductsPageProps> = ({data}) => {
  const title = 'ブランド一覧から探す';
  const description = 'プロテインのブランド一覧はこちら。';

  return (
    <SidebarLayout title={title} description={description}>
      <BrandList brands={data} />
    </SidebarLayout>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const res = await fetchBrands();

  return {props: {data: res.data, error: res.error}};
};

export default BrandProductsPage;
