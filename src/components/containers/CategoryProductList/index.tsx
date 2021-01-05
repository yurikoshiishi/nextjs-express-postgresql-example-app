import {Box, Hidden, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import React from 'react';
import {CATEGORIES} from '../../../constants';
import {ProductMasterWithReview} from '../../../types';
import ProductListItem from '../../elements/ProductListItem';

interface CategoryProductListProps {
  products: ProductMasterWithReview[];
}

const CategoryProductList: React.FC<CategoryProductListProps> = ({
  products,
}) => {
  const {query} = useRouter();
  const categoryId = query.id.toString();

  //TODO: reusable component for page title

  return (
    <div>
      <Box p={1}>
        <Typography variant="h1">
          {CATEGORIES[categoryId].title}ランキング
        </Typography>
      </Box>
      <ul>
        {products.map((p, i) => (
          <ProductListItem
            key={p.product_master_id}
            product={p}
            reviews={p.reviews}
            badgeText={`${i + 1}位`}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryProductList;
