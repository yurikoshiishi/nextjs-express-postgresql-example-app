import {makeStyles} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import CardLink from '../../elements/CardLink';
import ProductItem from '../../elements/ProductGridItem';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    '& .product-scroller-item': {
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
interface ProductHorizontalScrollerProps {
  products: ProductMaster[];
}

const ProductHorizontalScroller: React.FC<ProductHorizontalScrollerProps> = ({
  products,
}) => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {products.map((p) => (
        <CardLink
          key={p.product_master_id}
          href={`/products/${p.product_master_id}`}
          className="product-scroller-item"
        >
          <li>
            <ProductItem product={p} imageSize={{desktop: 150, mobile: 150}} />
          </li>
        </CardLink>
      ))}
    </ul>
  );
};

export default ProductHorizontalScroller;
