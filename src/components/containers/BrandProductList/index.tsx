import {Box, Typography} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import PageTitle from '../../elements/PageTitle';
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
      <PageTitle title={`${brand}のプロテイン一覧`} />
      <ProductList products={products} />
    </div>
  );
};

export default BrandProductList;
