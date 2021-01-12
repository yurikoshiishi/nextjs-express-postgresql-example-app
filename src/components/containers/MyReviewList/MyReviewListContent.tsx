import {Box, CircularProgress} from '@material-ui/core';
import {useRouter} from 'next/router';
import React, {useEffect, useReducer} from 'react';
import {useAuth} from '../../../contexts/auth';
import {Review} from '../../../types';
import {fetchMyReviews} from '../../../utils/api';
import NoResult from '../../elements/NoResult';
import PaginatedList from '../PaginatedList';
import ReviewListItem from '../ProductDetailContainer/ReviewListItem';

interface MyReviewListContentProps {}

interface ReviewState {
  isLoading: boolean;
  pageCount: number | null;
  reviews: {
    [key: string]: Review[];
  };
}

const initialState = {
  isLoading: true,
  pageCount: null,
  reviews: {},
};

const START_FETCH = 'START_FETCH';
const FETCH_REVIEWS = 'FETCH_REVIEWS';
const FETCH_NULL = 'FETCH_NULL';
const FETCH_ERROR = 'FETCH_ERROR';
const LOGOUT = 'LOGOUT';

const reducer = (state: ReviewState, action) => {
  switch (action.type) {
    case START_FETCH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_REVIEWS: {
      return {
        ...state,
        isLoading: false,
        pageCount: action.payload.pageCount,
        reviews: {
          ...state.reviews,
          [action.payload.page]: action.payload.reviews,
        },
      };
    }
    case FETCH_NULL: {
      return {
        ...state,
        isLoading: false,
        pageCount: 0,
        reviews: {},
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

const MyReviewListContent: React.FC<MyReviewListContentProps> = ({}) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const [state, dispatch] = useReducer(reducer, initialState);
  const {user} = useAuth();

  useEffect(() => {
    const handleFetchReviews = async () => {
      if (state.reviews[currentPage]) {
        return;
      }
      dispatch({type: START_FETCH});
      try {
        const res = await fetchMyReviews(currentPage);
        if (res.data) {
          const {reviews, review_page_count} = res.data;
          dispatch({
            type: FETCH_REVIEWS,
            payload: {pageCount: review_page_count, reviews, page: currentPage},
          });
        } else {
          dispatch({type: FETCH_NULL});
        }
      } catch (err) {
        console.log(err);
        dispatch({type: FETCH_ERROR});
      }
    };
    handleFetchReviews();
  }, [currentPage]);

  useEffect(() => {
    if (!user) {
      dispatch({type: LOGOUT});
    }
  }, [user]);

  if (state.isLoading) {
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!state.isLoading && Object.keys(state.reviews).length === 0) {
    return <NoResult name="レビュー" />;
  }

  return (
    <Box px={1} mb={2}>
      <PaginatedList pageCount={state.pageCount} shallow={true}>
        <ul>
          {state.reviews[currentPage] &&
            state.reviews[currentPage].map((review) => (
              <ReviewListItem
                key={review.review_id}
                review={review}
                brand_name_ja={review.brand_name_ja}
                name={review.name}
                showName={true}
              />
            ))}
        </ul>
      </PaginatedList>
    </Box>
  );
};

export default MyReviewListContent;
