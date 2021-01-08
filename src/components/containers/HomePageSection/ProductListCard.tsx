import {Grid, Hidden, makeStyles} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import {ProductMaster} from '../../../types';
import CardLink from '../../elements/CardLink';
import ProductItem from '../../elements/ProductGridItem';

const useStyles = makeStyles((theme) => ({
  desktop: {
    backgroundColor: theme.palette.background.paper,
    '& .brandLink': {
      fontSize: '12px',
    },
  },
  firstProduct: {
    padding: theme.spacing(2),
    borderRight: `1px solid ${theme.palette.divider}`,
    borderRadius: '8px 0 0 8px',
  },
  shadow: {
    cursor: 'pointer',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'border .4s ease',
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },
  nestedGrid: {
    height: '100%',
  },
  gridItem: {
    padding: theme.spacing(1),
    borderLeftColor: 'transparent',
    '&:nth-child(2)': {
      borderRadius: '0 8px 0 0',
    },
    '&:nth-child(4)': {
      borderRadius: '0 0 8px 0',
    },
    '&:nth-child(n+3)': {
      borderTopColor: 'transparent',
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
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
      borderRadius: '8px',
      border: `1px solid ${theme.palette.divider}`,
      '&:first-child': {
        marginLeft: 16,
      },
    },
  },
}));

interface ProductListCardProps {
  products: ProductMaster[];
}

const ProductListCard: React.FC<ProductListCardProps> = ({products}) => {
  const classes = useStyles();

  if (!products) {
    return null;
  }

  const firstProduct = products[0];
  const otherProducts = products.slice(1, products.length);

  return (
    <>
      <Hidden smDown>
        <Grid container className={classes.desktop} component="ul">
          <Link href={`/products/${firstProduct.product_master_id}`} passHref>
            <Grid
              item
              xs={12}
              md={5}
              className={`${classes.firstProduct} ${classes.shadow}`}
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
                      imageSize={{desktop: 125, mobile: 150}}
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
    </>
  );
};

export default ProductListCard;
