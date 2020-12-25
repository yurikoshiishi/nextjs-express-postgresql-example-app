import {useRouter} from 'next/router';
import React, {useEffect, useRef} from 'react';
import {Review} from '../../types';
import Pagination from '../elements/Pagination';
import ReviewListItem from './ReviewListItem';
import {scroller, Element} from 'react-scroll';

interface ReviewListProps {
  reviews: Review[];
  review_page_count: number;
}

const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  review_page_count,
}) => {
  const router = useRouter();
  const isFirstRender = useRef<Boolean>(true);
  const currentPage = Number(router.query.page) || 1;

  useEffect(() => {
    //NOTE: do not scroll to review list when it's first render.
    //should only fire when a user navigates to different review list page.
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      scroller.scrollTo('review-list', {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  }, [currentPage]);

  const handlePageChange = (e: React.ChangeEvent, page: number) => {
    const path = router.pathname;
    const query = router.query;
    query.page = `${page}`;
    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <Element name="review-list">
      {reviews.map((review) => (
        <ReviewListItem key={review.review_id} review={review} />
      ))}
      <Pagination
        currentPage={currentPage}
        pageCount={review_page_count}
        onChange={handlePageChange}
      />
    </Element>
  );
};

export default ReviewList;
