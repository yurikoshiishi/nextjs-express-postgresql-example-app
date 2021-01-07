import React from 'react';
import {ProductMaster, Review} from '../../../types';
import {makeStyles, Typography, Box, Button} from '@material-ui/core';
import Image from 'next/image';
import CardLink from '../CardLink';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ProteinIcon from '../../icons/ProteinIcon';
import RatingStars from '../RatingStars';
import TextWithIcon from '../TextWithIcon';
import BrandLink from '../BrandLink';
import ReviewListItem from '../../containers/ProductDetailContainer/ReviewListItem';
import Link from 'next/link';

const desktopImageSize = 200;
const mobileImageSize = 125;
const buttonHeight = 40;

const useStyles = ({index}) =>
  makeStyles((theme) => ({
    root: {
      cursor: 'pointer',
      position: 'relative',
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        marginBottom: 0,
        '& .CardLink': {
          borderTop:
            index === 0
              ? `1px solid ${theme.palette.divider}`
              : '1px solid transparent',
        },
      },
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
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
    productName: {
      fontWeight: theme.typography.fontWeightBold,
    },
    brandName: {
      marginBottom: theme.spacing(0.5),
      color: theme.palette.primary.main,
    },
    review: {
      flexShrink: 0,
      '& > .ReviewListItem': {
        overflowY: 'scroll',
        overflowWrap: 'anywhere',
        height: desktopImageSize - buttonHeight,
        width: 325,
        marginBottom: 0,
        [theme.breakpoints.down('md')]: {
          width: 250,
        },
        [theme.breakpoints.down('xs')]: {
          height: 'auto',
          maxHeight: desktopImageSize,
          width: '100%',
        },
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    buttonContainer: {
      textAlign: 'right',
      paddingTop: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'left',
        paddingTop: theme.spacing(0.5),
      },
    },
    badge: {
      position: 'absolute',
      borderRadius: 8,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(0.25, 3),
      zIndex: 100,
      [theme.breakpoints.down('xs')]: {
        top: 16,
      },
    },
  }));

interface ProductListItemProps {
  product: ProductMaster;
  reviews?: Review[];
  badgeText?: string;
  index: number;
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
  badgeText,
  index,
}) => {
  const classes = useStyles({index})();
  return (
    <li className={classes.root}>
      <CardLink href={`/products/${product_master_id}`}>
        {badgeText && <div className={classes.badge}>{badgeText}</div>}
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
                <Box mb={2}>
                  <BrandLink
                    brand_id={brand_id}
                    brand_name_en={brand_name_en}
                    brand_name_ja={brand_name_ja}
                  />
                  <Typography
                    variant="body1"
                    component="h3"
                    className={classes.productName}
                  >
                    {name}
                  </Typography>
                </Box>
                <div>
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
                </div>
              </div>

              <RatingStars rating={avg_total_rating} />
            </div>
          </div>
          {reviews && (
            <div className={classes.review}>
              <ReviewListItem review={reviews[0]} disableThumbsUp />
              <div className={classes.buttonContainer}>
                <Link href={`/products/${product_master_id}`} passHref>
                  <Button variant="text" color="primary">
                    もっとレビューを見る
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </CardLink>
    </li>
  );
};

export default ProductListItem;
