import React from 'react';
import {ProductMaster, Review} from '../../../types';
import {makeStyles, Typography, Box} from '@material-ui/core';
import Image from 'next/image';
import CardLink from '../CardLink';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ProteinIcon from '../../icons/ProteinIcon';
import RatingStars from '../RatingStars';
import TextWithIcon from '../TextWithIcon';
import BrandLink from '../BrandLink';
import {Rating} from '@material-ui/lab';
import ReviewListItem from '../../containers/ProductDetailContainer/ReviewListItem';

const desktopImageSize = 150;
const mobileImageSize = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      padding: theme.spacing(1, 0),
    },
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: desktopImageSize,
    height: desktopImageSize,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: mobileImageSize,
      height: mobileImageSize,
      marginRight: theme.spacing(1),
    },
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      alignItems: 'stretch',
    },
  },
  brandName: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.primary.main,
  },
  productName: {
    marginBottom: theme.spacing(1),
  },
  review: {
    backgroundColor: theme.palette.grey[50],
    borderRadius: 8,
    padding: theme.spacing(1),
    height: desktopImageSize,
    minWidth: 300,
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      minWidth: 'auto',
      '& div': {
        marginBottom: 0,
      },
    },
  },
}));

interface ProductListItemProps {
  product: ProductMaster;
  reviews?: Review[];
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  product: {
    product_master_id,
    name,
    brand_id,
    brand_name_ja,
    brand_name_en,
    review_count,
    variation_count,
    avg_total_rating,
  },
  reviews,
}) => {
  const classes = useStyles();
  return (
    <li className={classes.root}>
      <CardLink href={`/products/${product_master_id}`}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.imageContainer}>
              <Image
                src={`/images/products/${product_master_id}.jpg`}
                alt={`${brand_name_ja}-${name}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={classes.textContainer}>
              <div>
                <BrandLink
                  brand_id={brand_id}
                  brand_name_en={brand_name_en}
                  brand_name_ja={brand_name_ja}
                />
                <Typography variant="h3" className={classes.productName}>
                  {name}
                </Typography>
              </div>
              <Box mb={1}>
                <TextWithIcon
                  icon={<ProteinIcon />}
                  text={`${variation_count}フレーバー`}
                />
              </Box>
              <Box mb={1}>
                <TextWithIcon
                  icon={<RateReviewOutlinedIcon />}
                  text={`${review_count}件のレビュー`}
                />
              </Box>
              <RatingStars rating={avg_total_rating} />
            </div>
          </div>
          {reviews && (
            <div className={classes.review}>
              <ReviewListItem review={reviews[0]} disableThumbsUp />
            </div>
          )}
        </div>
      </CardLink>
    </li>
  );
};

export default ProductListItem;
