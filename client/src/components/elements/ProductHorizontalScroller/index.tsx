import {makeStyles} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import CardLink from '../../elements/CardLink';
import ProductItem from '../../elements/ProductGridItem';

const useStyles = ({negativeMargin = 1}) =>
  makeStyles((theme) => ({
    root: {
      marginLeft: theme.spacing(-negativeMargin),
      marginRight: theme.spacing(-negativeMargin),
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
          marginLeft: theme.spacing(negativeMargin),
        },
      },
    },
  }));
interface ProductHorizontalScrollerProps {
  products: ProductMaster[];
  negativeMargin: number; //NOTE: use negative margin to override parent padding
}

const ProductHorizontalScroller: React.FC<ProductHorizontalScrollerProps> = ({
  products,
  negativeMargin,
}) => {
  const classes = useStyles({negativeMargin})();

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
