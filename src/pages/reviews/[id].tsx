import React from 'react';
import {fetchProductVariations} from '../../utils/api';
import {ContextWithParams, ProductVariations} from '../../types';
import {ApiError} from 'next/dist/next-server/server/api-utils';
import ReviewForm from '../../components/containers/Login/ReviewForm';

interface PostReviewPageProps {
  [key: string]: any;
  error?: ApiError;
  data: ProductVariations;
}

const PostReviewPage: React.FC<PostReviewPageProps> = ({data}) => {
  return (
    <div>
      <ReviewForm productVariations={data} />
    </div>
  );
};

export const getServerSideProps = async (ctx: ContextWithParams) => {
  const res = await fetchProductVariations(ctx);
  return {
    props: {data: res.data, error: res.error},
  };
};

export default PostReviewPage;
