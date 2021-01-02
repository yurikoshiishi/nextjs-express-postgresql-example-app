import {Box, Card, CardContent, Divider} from '@material-ui/core';
import React from 'react';
import {ProductDetail} from '../../../types';
import ReviewList from './ReviewList';
import ProductDetailHeader from './ProductDetailHeader';
import ProductDetailReviewSummary from './ProductDetailReviewSummary';

interface ProductDetailContainerProps {
  productDetail: ProductDetail;
}

const ProductDetailContainer: React.FC<ProductDetailContainerProps> = ({
  productDetail,
}) => {
  const {reviews, review_page_count} = productDetail;

  //TODO: add filter to review list. two column in desktop, one in mobile.

  return (
    <Card>
      <CardContent>
        <ProductDetailHeader {...productDetail} />
        <Box my={3}>
          <Divider />
        </Box>
        <ProductDetailReviewSummary {...productDetail} />
        <Box my={3}>
          <Divider />
          <p></p>
        </Box>
        <ReviewList reviews={reviews} review_page_count={review_page_count} />
      </CardContent>
    </Card>
  );
};

export default ProductDetailContainer;
