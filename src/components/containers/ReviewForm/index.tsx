import {Box, Card, CardContent, Divider} from '@material-ui/core';
import React from 'react';
import {ProductVariations} from '../../../types';
import ReviewFormContent from './ReviewFormContent';
import ReviewFormHeader from './ReviewFormHeader';

interface ReviewFormProps {
  productVariations: ProductVariations;
}

const ReviewForm: React.FC<ReviewFormProps> = ({productVariations}) => {
  const {
    brand_id,
    brand_name_ja,
    brand_name_en,
    name,
    product_master_id,
    product_variations,
  } = productVariations;

  return (
    <Card>
      <CardContent>
        <ReviewFormHeader
          name={name}
          brand_id={brand_id}
          brand_name_ja={brand_name_ja}
          brand_name_en={brand_name_en}
          product_master_id={product_master_id}
        />
        <Box my={3}>
          <Divider />
        </Box>
        <ReviewFormContent
          product_master_id={product_master_id}
          product_variations={product_variations}
        />
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
