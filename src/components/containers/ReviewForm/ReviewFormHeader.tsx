import React from 'react';
import {makeStyles} from '@material-ui/core';
import ProductTitle from '../../elements/ProductTitle';
import ImageContainer from '../../elements/ImageContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& h1': {
      marginBottom: theme.spacing(1),
    },
  },
  imageContainer: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
        <ImageContainer
          src={`/images/products/${product_master_id}.jpg`}
          alt={`${brand_name_ja}-${name}`}
          desktopSize={250}
          mobileSize={150}
        />
      </div>
    </div>
  );
};

export default ReviewFormHeader;
