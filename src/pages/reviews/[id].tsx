import React from 'react';
import {Error, fetchProductVariations} from '../../utils/api';
import {ContextWithParams, ProductVariations} from '../../types';
import ReviewForm from '../../components/containers/ReviewForm';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import {getProductNameWithBrand} from '../../utils';

interface PostReviewPageProps {
  error: Error | null;
  data: ProductVariations | null;
}

const PostReviewPage: React.FC<PostReviewPageProps> = ({data}) => {
  const title = `${getProductNameWithBrand(data)}のレビュー投稿`;
  const description = `${getProductNameWithBrand(
    data
  )}のレビュー投稿はこちら！`;

  return (
    <DefaultLayout noIndex title={title} description={description}>
      <ReviewForm productVariations={data} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const res = await fetchProductVariations(ctx);
  return {
    props: {data: res.data, error: res.error},
  };
};

export default PostReviewPage;
