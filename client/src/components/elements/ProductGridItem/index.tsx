import {Box, Typography, makeStyles} from '@material-ui/core';
import {RateReviewOutlined} from '@material-ui/icons';
import React from 'react';
import {MuiTypography, ProductMaster} from '../../../types';
import ProteinIcon from '../../icons/ProteinIcon';
import BrandLink from '../BrandLink';
import ImageContainer from '../ImageContainer';
import RatingStars from '../RatingStars';
import TextLink from '../TextLink';
import TextWithIcon from '../TextWithIcon';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    firstProduct: {
      padding: theme.spacing(2),
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    imageContainer: {
      margin: theme.spacing(0, 'auto', 2),
    },
    productName: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
      },
    },
    textContainer: {
      '& *': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  };
});

interface ProductGridItemProps {
  product: ProductMaster;
  reviewSize?: 'small' | 'medium' | 'large';
  imageSize?: {desktop: number; mobile: number};
  titleVariant?: MuiTypography;
}

const ProductGridItem: React.FC<ProductGridItemProps> = ({
  product: {
    product_master_id,
    brand_name_ja,
    brand_name_en,
    brand_id,
    name,
    variation_count,
    review_count,
    avg_total_rating,
  },
  reviewSize = 'small',
  imageSize = {desktop: 200, mobile: 100},
  titleVariant = 'body1',
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <ImageContainer
          src={`/images/products/${product_master_id}.jpg`}
          alt={`${brand_name_ja}-${name}`}
          desktopSize={imageSize.desktop}
          mobileSize={imageSize.mobile}
        />
      </div>
      <div className={classes.textContainer}>
        <Box mb={1}>
          <BrandLink
            brand_id={brand_id}
            brand_name_ja={brand_name_ja}
            brand_name_en={brand_name_en}
          />
          <TextLink href={`/products/${product_master_id}`}>
            <Typography
              variant={titleVariant}
              component="h3"
              className={classes.productName}
            >
              {name}
            </Typography>
          </TextLink>
        </Box>
        <Box mb={1} display="flex">
          <Box mr={1}>
            <TextWithIcon
              icon={<ProteinIcon />}
              text={`${variation_count}フレーバー`}
            />
          </Box>
          <Box>
            <TextWithIcon
              icon={<RateReviewOutlined />}
              text={`${review_count || 0}件`}
            />
          </Box>
        </Box>
        <RatingStars rating={avg_total_rating} size={reviewSize} />
      </div>
    </div>
  );
};

export default ProductGridItem;
