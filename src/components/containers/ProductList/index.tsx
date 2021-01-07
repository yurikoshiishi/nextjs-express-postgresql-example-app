import {Card, CardContent, Grid, Hidden} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import ProductListItem from '../../elements/ProductListItem';
import ProductGridItem from '../../elements/ProductGridItem';
import CardLink from '../../elements/CardLink';

interface ProductListProps {
  products: ProductMaster[];
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
  return (
    <>
      <Hidden smDown>
        <Grid container spacing={1}>
          {products.map((p) => (
            <Grid item xs={4} key={p.product_master_id}>
              <CardLink href={`/products/${p.product_master_id}`}>
                <ProductGridItem product={p} />
              </CardLink>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <ul>
          {products.map((p, i) => (
            <ProductListItem key={p.product_master_id} product={p} index={i} />
          ))}
        </ul>
      </Hidden>
    </>
  );
};

export default ProductList;
