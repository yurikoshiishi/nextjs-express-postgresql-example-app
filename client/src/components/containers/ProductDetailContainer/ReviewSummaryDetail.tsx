import {Typography} from '@material-ui/core';
import React from 'react';
import RatingStars from '../../elements/RatingStars';

interface ReviewSummaryDetailProps {
  rating: number;
  text: string;
}

const ReviewSummaryDetail: React.FC<ReviewSummaryDetailProps> = ({
  rating,
  text,
}) => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {text}
      </Typography>
      <RatingStars rating={rating} size="small" backgroundColor="#fff" />
    </div>
  );
};

export default ReviewSummaryDetail;
