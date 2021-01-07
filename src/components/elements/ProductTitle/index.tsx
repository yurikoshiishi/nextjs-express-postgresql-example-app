import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import {MuiTypography} from '../../../types';
import BrandLink from '../BrandLink';

const useStyles = makeStyles((theme) => ({
  name: {
    display: 'block',
  },
}));

interface ProductTitleProps {
  name: string;
  brand_id: string;
  brand_name_ja: string;
  brand_name_en: string;
  suffix?: string;
  variant?: MuiTypography;
}

const ProductTitle: React.FC<ProductTitleProps> = ({
  name,
  brand_name_ja,
  brand_name_en,
  suffix,
  variant = 'h1',
  brand_id,
}) => {
  const classes = useStyles();

  return (
    <Typography variant={variant}>
      <BrandLink
        brand_id={brand_id}
        brand_name_ja={brand_name_ja}
        brand_name_en={brand_name_en}
      />
      <span className={classes.name}>
        {name}
        {suffix && suffix}
      </span>
    </Typography>
  );
};

export default ProductTitle;
