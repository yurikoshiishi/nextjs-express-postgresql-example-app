import {
  Box,
  Card,
  CardContent,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import ProductListItem from '../../elements/ProductListItem';
import ProductGridItem from '../../elements/ProductGridItem';

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
      <Hidden smDown>
        <Grid container spacing={1}>
          {products.map((p) => (
            <Grid item xs={4} key={p.product_master_id}>
              <Card>
                <CardContent>
                  <ProductGridItem product={p} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <ul>
          {products.map((p) => (
            <ProductListItem key={p.product_master_id} product={p} />
          ))}
        </ul>
      </Hidden>
    </div>
  );
};

export default BrandProductList;
