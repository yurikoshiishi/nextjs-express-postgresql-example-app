import React from 'react';
import {Error, fetchProductVariations} from '../../utils/api';
import {ContextWithParams, ProductVariations} from '../../types';
import ReviewForm from '../../components/containers/ReviewForm';

interface PostReviewPageProps {
  [key: string]: any;
  error: Error | null;
  data: ProductVariations | null;
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
