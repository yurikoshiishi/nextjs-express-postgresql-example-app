import React from 'react';
import {Review} from '../../../types';
import ReviewListItem from './ReviewListItem';
import PaginatedList from '../PaginatedList';
import NoReview from './NoReview';

interface ReviewListProps {
  reviews: Review[];
  review_page_count: number;
  product_master_id: string;
}

const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  review_page_count,
  product_master_id,
}) => {
  const renderItem = (review) => (
    <ReviewListItem key={review.review_id} review={review} />
  );

  if (!reviews) {
    return <NoReview product_master_id={product_master_id} />;
  }

  return (
    <PaginatedList
      name="review-list"
      items={reviews}
      renderItem={renderItem}
      pageCount={review_page_count}
    />
  );
};

export default ReviewList;
