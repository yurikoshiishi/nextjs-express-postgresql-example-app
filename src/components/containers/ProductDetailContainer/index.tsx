import {Box, Card, CardContent, Divider} from '@material-ui/core';
import React, {useMemo} from 'react';
import {ProductDetail} from '../../../types';
import ReviewList from './ReviewList';
import ProductDetailHeader from './ProductDetailHeader';
import ProductDetailReviewSummary from './ProductDetailReviewSummary';
import ReviewFilter from './ReviewFilter';
import ReviewSortSelect from './ReviewSortSelect';
import PostReviewButton from './PostReviewButton';

interface ProductDetailContainerProps {
  productDetail: ProductDetail;
}

const ProductDetailContainer: React.FC<ProductDetailContainerProps> = ({
  productDetail,
}) => {
  const {
    product_master_id,
    product_variations,
    reviews,
    review_page_count,
  } = productDetail;

  const flavors = useMemo(() => {
    return productDetail.product_variations.map((v) => ({
      flavor: v.flavor,
      id: v.product_variation_id,
    }));
  }, [product_variations]);

  return (
    <>
      <Card>
        <CardContent>
          <ProductDetailHeader {...productDetail} />
          <Box my={3}>
            <Divider />
          </Box>
          <ProductDetailReviewSummary {...productDetail} />
          <Box my={3}>
            <Divider />
          </Box>
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box mr={2} flexGrow={1}>
              <ReviewFilter flavors={flavors} />
            </Box>
            <Box flexShrink={0}>
              <ReviewSortSelect />
            </Box>
          </Box>
          <ReviewList reviews={reviews} review_page_count={review_page_count} />
        </CardContent>
      </Card>
      <PostReviewButton product_master_id={product_master_id} />
    </>
  );
};

export default ProductDetailContainer;
