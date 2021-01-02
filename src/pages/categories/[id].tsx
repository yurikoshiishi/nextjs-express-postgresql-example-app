import {useRouter} from 'next/router';
import React from 'react';
import CategoryProductList from '../../components/containers/CategoryProductList';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import {CATEGORIES} from '../../constants';
import {ContextWithParams, ProductMasterWithReview} from '../../types';
import {fetchCategoryProducts} from '../../utils/api';

interface CategoryProductsPageProps {
  error: Error | null;
  data: ProductMasterWithReview[] | null;
}

const CategoryProductsPage: React.FC<CategoryProductsPageProps> = ({data}) => {
  const {query} = useRouter();
  const categoryId = query.id.toString();

  const title = CATEGORIES[categoryId].title + 'ランキング';
  const description = `${title}はこちら。`;

  return (
    <DefaultLayout title={title} description={description}>
      <CategoryProductList products={data} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const res = await fetchCategoryProducts(ctx);

  return {props: {data: res.data, error: res.error}};
};

export default CategoryProductsPage;
