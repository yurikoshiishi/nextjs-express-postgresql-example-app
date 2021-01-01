import React from 'react';
import {ProductMaster} from '../../../types';
import {makeStyles, Typography, Box} from '@material-ui/core';
import Image from 'next/image';
import CardLink from '../../elements/CardLink';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ProteinIcon from '../../icons/ProteinIcon';
import RatingStars from '../../elements/RatingStars';
import TextWithIcon from '../../elements/TextWithIcon';
import BrandLink from '../../elements/BrandLink';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
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
    brand_name_en,
    review_count,
    variation_count,
    avg_total_rating,
  },
}) => {
  const classes = useStyles();
  return (
    <li className={classes.root}>
      <CardLink href={`/products/${product_master_id}`}>
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
      </CardLink>
    </li>
  );
};

export default ProductListItem;
