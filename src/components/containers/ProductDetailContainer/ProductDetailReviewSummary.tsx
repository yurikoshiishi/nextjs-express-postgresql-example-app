import {Box, Grid} from '@material-ui/core';
import React from 'react';
import {ReviewSummary as ReviewSummaryType} from '../../../types';
import ReviewSummary from '../../elements/ReviewSummary';
import ReviewSummaryDetail from './ReviewSummaryDetail';

interface ProductDetailReviewSummaryProps {
  product_master_id: string;
  review_count: number;
  review_summary: ReviewSummaryType;
  avg_total_rating: number;
  avg_taste_rating: number;
  avg_mix_rating: number;
}

const ProductDetailReviewSummary: React.FC<ProductDetailReviewSummaryProps> = ({
  product_master_id,
  review_count,
  review_summary,
  avg_total_rating,
  avg_mix_rating,
  avg_taste_rating,
}) => {
  return (
    <Grid container justify="space-around">
      <Grid item xs={12} sm={5}>
        <Box mb={{xs: 4, sm: 0}}>
          <ReviewSummary
            review_count={review_count}
            review_summary={review_summary}
            avg_total_rating={avg_total_rating}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mb={{xs: 4, sm: 0}}
        >
          <Box mb={4}>
            <ReviewSummaryDetail rating={avg_taste_rating} text="味の評価" />
          </Box>
          <Box>
            <ReviewSummaryDetail
              rating={avg_mix_rating}
              text="溶けやすさの評価"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailReviewSummary;
