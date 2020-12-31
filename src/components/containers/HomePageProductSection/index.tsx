import {Button, Typography, makeStyles} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import {ProductMasterWithReview} from '../../../types';
import ProductListItem from '../ProductList/ProductListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(8),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    textAlign: 'center',
  },
}));

interface HomePageProductSectionProps {
  title: string;
  products: ProductMasterWithReview[];
  href?: string;
}

const HomePageProductSection: React.FC<HomePageProductSectionProps> = ({
  title,
  products,
  href,
}) => {
  const classes = useStyles();

  //TODO: if mobile, overflow-x is scroll.

  return (
    <section className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <ul>
        {products.map((product) => (
          <ProductListItem product={product} key={product.product_master_id} />
        ))}
      </ul>
      <div className={classes.buttonContainer}>
        <Link href={href} passHref>
          <Button variant="outlined" color="primary">
            もっと見る
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomePageProductSection;
