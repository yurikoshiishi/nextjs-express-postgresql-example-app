import React from 'react';
import {Review} from '../../../types';
import ReviewListItem from './ReviewListItem';
import PaginatedList from '../PaginatedList';

interface ReviewListProps {
  reviews: Review[];
  review_page_count: number;
}

const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  review_page_count,
}) => {
  const renderItem = (review) => (
    <ReviewListItem key={review.review_id} review={review} />
  );

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
