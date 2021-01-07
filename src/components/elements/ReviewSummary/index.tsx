import React, {useMemo} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import {ReviewSummary as ReviewSummaryType} from '../../../types';
import RatingStars from '../RatingStars';
import SummaryBar from './SummaryBar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    textAlign: 'center',
    margin: '0 auto',
  },
}));

interface ReviewSummaryProps {
  review_count: number;
  review_summary: ReviewSummaryType;
  avg_total_rating: number;
}

const RATING_ORDER = [5, 4, 3, 2, 1];

const ReviewSummary: React.FC<ReviewSummaryProps> = ({
  review_count,
  review_summary,
  avg_total_rating,
}) => {
  const classes = useStyles();

  const reviewPercents = useMemo(() => {
    const output = {};

    RATING_ORDER.forEach((rating) => {
      const numberOfReviewsForRating = review_summary[rating];
      output[rating] = (numberOfReviewsForRating / review_count) * 100;
    });

    return output;
  }, [review_summary, review_count]);

  return (
    <div className={classes.root}>
      <Box mb={1}>
        <RatingStars rating={avg_total_rating} size="medium" />
        <Typography variant="caption" color="textSecondary">
          {review_count}件のレビュー
        </Typography>
      </Box>
      <Box px={1}>
        {RATING_ORDER.map((rating) => (
          <SummaryBar
            key={rating}
            percent={reviewPercents[rating]}
            rating={rating}
          />
        ))}
      </Box>
    </div>
  );
};

export default ReviewSummary;
