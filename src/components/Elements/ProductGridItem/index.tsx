import {Box, Typography, makeStyles} from '@material-ui/core';
import {RateReviewOutlined} from '@material-ui/icons';
import Image from 'next/image';
import React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import {MuiTypography, ProductMaster} from '../../../types';
import ProteinIcon from '../../icons/ProteinIcon';
import BrandLink from '../BrandLink';
import RatingStars from '../RatingStars';
import TextLink from '../TextLink';
import TextWithIcon from '../TextWithIcon';

const useStyles = ({imageSize}) =>
  makeStyles((theme) => {
    const desktopImageSize = imageSize.desktop ? imageSize.desktop : imageSize;
    const mobileImageSize = imageSize.mobile
      ? imageSize.mobile
      : imageSize - 100 > 50
      ? imageSize - 100
      : 50;

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
        position: 'relative',
        width: desktopImageSize,
        height: desktopImageSize,
        borderRadius: 8,
        overflow: 'hidden',
        margin: theme.spacing(0, 'auto', 2),
        [theme.breakpoints.down('xs')]: {
          width: mobileImageSize,
          height: mobileImageSize,
        },
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
  imageSize?: number | {desktop: number; mobile: number};
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
  imageSize = 200,
  titleVariant = 'body1',
}) => {
  const classes = useStyles({imageSize})();
  const isMobile = useIsMobile();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <Image
          src={`/images/products/${product_master_id}.jpg`}
          alt={`${brand_name_ja}-${name}`}
          layout="fill"
          objectFit="contain"
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
              text={`${review_count}件${!isMobile ? 'のレビュー' : ''}`}
            />
          </Box>
        </Box>
        <RatingStars rating={avg_total_rating} size={reviewSize} />
      </div>
    </div>
  );
};

export default ProductGridItem;
