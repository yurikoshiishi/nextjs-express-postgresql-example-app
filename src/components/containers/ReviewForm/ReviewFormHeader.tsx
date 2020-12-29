import React from 'react';
import {makeStyles} from '@material-ui/core';
import ProductTitle from '../../elements/ProductTitle';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& h1': {
      marginBottom: theme.spacing(1),
    },
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    margin: theme.spacing(0, 'auto'),
    [theme.breakpoints.down('xs')]: {
      width: 150,
      height: 150,
    },
  },
}));

interface ReviewFormHeaderProps {
  name: string;
  brand_id: string;
  brand_name_ja: string;
  brand_name_en: string;
  product_master_id: string;
}

const ReviewFormHeader: React.FC<ReviewFormHeaderProps> = ({
  name,
  brand_id,
  brand_name_en,
  brand_name_ja,
  product_master_id,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProductTitle
        name={name}
        brand_id={brand_id}
        brand_name_ja={brand_name_ja}
        brand_name_en={brand_name_en}
      />
      <div className={classes.imageContainer}>
        <Image
          src={`/images/products/${product_master_id}.jpg`}
          alt={`${brand_name_ja}-${name}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ReviewFormHeader;
