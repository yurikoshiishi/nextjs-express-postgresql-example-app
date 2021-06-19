import {Box, Grid, Hidden, Typography} from '@material-ui/core';
import React from 'react';
import {Brand} from '../../../types';
import BrandGridItem from '../../elements/BrandItem/BrandGridItem';
import BrandListItem from '../../elements/BrandItem/BrandListItem';
import PageTitle from '../../elements/PageTitle';

interface BrandListProps {
  brands: Brand[];
}

const BrandList: React.FC<BrandListProps> = ({brands}) => {
  return (
    <div>
      <PageTitle title="プロテインブランド一覧" />
      <Hidden xsDown>
        <Grid container spacing={1}>
          {brands.map((brand) => (
            <Grid key={brand.brand_id} item xs={4}>
              <BrandGridItem {...brand} />
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <Hidden smUp>
        <ul>
          {brands.map((b, i) => (
            <BrandListItem key={b.brand_id} {...b} index={i} />
          ))}
        </ul>
      </Hidden>
    </div>
  );
};

export default BrandList;
