import {Box, Button, Grid, Typography} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import {ReviewSummary as ReviewSummaryType} from '../../../types';
import ReviewSummary from '../../elements/ReviewSummary';

interface ProductDetailReviewSummaryProps {
  product_master_id: string;
  review_count: number;
  review_summary: ReviewSummaryType;
  avg_total_rating: number;
}

const ProductDetailReviewSummary: React.FC<ProductDetailReviewSummaryProps> = ({
  product_master_id,
  review_count,
  review_summary,
  avg_total_rating,
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
        >
          <Box mb={2} textAlign="center">
            <Typography variant="body2" color="textPrimary">
              あなたのレビューが世界の筋肉を救います！
            </Typography>
          </Box>
          <Box textAlign="center">
            <Link href={`/reviews/${product_master_id}`} passHref>
              <Button variant="outlined" color="primary">
                レビューを投稿する
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailReviewSummary;
