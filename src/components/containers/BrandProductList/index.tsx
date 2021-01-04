import {Box, Typography} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import ProductList from '../ProductList';

interface BrandProductListProps {
  products: ProductMaster[];
  brand: string;
}

const BrandProductList: React.FC<BrandProductListProps> = ({
  products,
  brand,
}) => {
  return (
    <div>
      <Box p={1}>
        <Typography variant="h1">{brand}のプロテイン一覧</Typography>
      </Box>
      <ProductList products={products} />
    </div>
  );
};

export default BrandProductList;
