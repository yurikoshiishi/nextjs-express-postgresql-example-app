import React from 'react';
import {ProductMaster} from '../../types';
import {makeStyles, Box, Typography} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import Image from 'next/image';
import CardLink from '../Elements/CardLink';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ProteinIcon from '../Icons/ProteinIcon';
import TextLink from '../Elements/TextLink';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  content: {
    display: 'flex',
    alignItems: 'stretch',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      padding: theme.spacing(1, 0),
    },
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: 150,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: 100,
      height: 100,
      marginRight: theme.spacing(1),
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  brandName: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.primary.main,
  },
  productName: {
    marginBottom: theme.spacing(1),
  },
  reviewContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    '& .reviewCount': {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(1),
    },
  },
  starContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[100],
    borderRadius: 16,
    padding: theme.spacing(0.5, 2),
    '& .rating': {
      marginLeft: theme.spacing(1),
      color: theme.palette.grey[700],
      fontWeight: 600,
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      marginBottom: theme.spacing(0.5),
    },
  },
  textWithIcon: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      width: '1.125rem',
      height: '1.125rem',
      marginRight: theme.spacing(0.5),
      color: theme.palette.text.secondary,
      fill: theme.palette.text.secondary,
    },
    '& p': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary,
      fontWeight: 500,
    },
  },
}));

interface ProductListItemProps {
  product: ProductMaster;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  product: {
    product_master_id,
    name,
    brand_id,
    brand_name_ja,
    review_count,
    variation_count,
    avg_total_rating,
  },
}) => {
  const classes = useStyles();
  return (
    <CardLink className={classes.root} href={`/products/${product_master_id}`}>
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <Image
            src={`/images/${product_master_id}.jpg`}
            alt={`${brand_name_ja}-${name}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={classes.textContainer}>
          <TextLink href={`/products/brands/${brand_id}`}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.brandName}
            >
              {brand_name_ja}
            </Typography>
          </TextLink>
          <Typography variant="h3" className={classes.productName}>
            {name}
          </Typography>
          <div className={classes.textWithIcon}>
            <ProteinIcon />
            <p>{variation_count}フレーバー</p>
          </div>
          <div className={classes.textWithIcon}>
            <RateReviewOutlinedIcon />
            <p>{review_count}件のレビュー</p>
          </div>
          <div className={classes.reviewContainer}>
            <div className={classes.starContainer}>
              <Rating
                name="平均評価"
                value={avg_total_rating}
                readOnly
                precision={0.5}
                size="small"
                emptyIcon={<StarBorderOutlinedIcon fontSize="inherit" />}
              />
              <p className="rating">{avg_total_rating} / 5</p>
            </div>
          </div>
        </div>
      </div>
    </CardLink>
  );
};

export default ProductListItem;
