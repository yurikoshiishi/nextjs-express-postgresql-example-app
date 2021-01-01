import {Card, Grid, Hidden, makeStyles} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import {ProductMasterWithReview} from '../../../types';
import CardLink from '../../elements/CardLink';
import ProductItem from '../../elements/ProductItem';

const useStyles = makeStyles((theme) => ({
  desktop: {
    '& .brandLink': {
      fontSize: '12px',
    },
  },
  firstProduct: {
    padding: theme.spacing(2),
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  shadow: {
    cursor: 'pointer',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'border .4s ease',
    '&:hover': {
      borderColor: theme.palette.primary.main + '!important',
    },
  },
  nestedGrid: {
    height: '100%',
  },
  gridItem: {
    padding: theme.spacing(1),
    borderLeftColor: 'transparent',
    '&:nth-child(2)': {
      borderRadius: '0 12px 0 0',
    },
    '&:nth-child(4)': {
      borderRadius: '0 0 12px 0',
    },
    '&:nth-child(n+2)': {
      borderTopColor: 'transparent',
    },
  },
  mobile: {
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    '& .mobileItem': {
      [theme.breakpoints.up('sm')]: {
        width: '40%',
      },
      width: '60%',
      flexShrink: 0,
      marginLeft: theme.spacing(1),
      borderRadius: '12px',
      border: `1px solid ${theme.palette.divider}`,
      '&:first-child': {
        marginLeft: 16,
      },
    },
  },
}));

interface ProductListCardProps {
  products: ProductMasterWithReview[];
}

const ProductListCard: React.FC<ProductListCardProps> = ({products}) => {
  const classes = useStyles();
  const firstProduct = products[0];
  const otherProducts = products.slice(1, products.length);

  return (
    <div>
      <Hidden smDown>
        <Grid container className={classes.desktop} component="ul">
          <Link href={`/products/${firstProduct.product_master_id}`} passHref>
            <Grid
              item
              xs={12}
              md={5}
              className={`${classes.firstProduct} ${classes.shadow}`}
              style={{borderRadius: '12px 0 0 12px'}}
              component="li"
            >
              <ProductItem
                product={firstProduct}
                imageSize={{desktop: 350, mobile: 150}}
                reviewSize="medium"
              />
            </Grid>
          </Link>
          <Grid item xs={12} md={7} component="li">
            <Grid container component="ul" className={classes.nestedGrid}>
              {otherProducts.map((p, i) => (
                <Link
                  key={p.product_master_id}
                  href={`/products/${p.product_master_id}`}
                  passHref
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className={`${classes.gridItem} ${classes.shadow}`}
                    component="li"
                  >
                    <ProductItem
                      product={p}
                      imageSize={{desktop: 100, mobile: 150}}
                      titleVariant="body1"
                    />
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <ul className={classes.mobile}>
          {products.map((p, i) => (
            <CardLink
              key={p.product_master_id}
              href={`/products/${p.product_master_id}`}
              className="mobileItem"
            >
              <li>
                <ProductItem product={p} />
              </li>
            </CardLink>
          ))}
        </ul>
      </Hidden>
    </div>
  );
};

export default ProductListCard;
