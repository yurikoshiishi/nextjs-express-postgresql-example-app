import {Button} from '@material-ui/core';
import React from 'react';
import {makeStyles, Grid} from '@material-ui/core';
import Image from 'next/image';
import TextWithIcon from '../../../elements/TextWithIcon';
import ProteinIcon from '../../../icons/ProteinIcon';
import {CustomTheme} from '../../../../theme';
import {getAmazonUrl} from '../../../../utils';
import ProductTitle from '../../../elements/ProductTitle';

const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: 150,
      height: 150,
      margin: theme.spacing(1, 'auto', 1),
    },
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    '& h1': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
      },
    },
    '& .brand': {
      fontSize: theme.typography.body2.fontSize,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
    },
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
    '& .MuiButton-root': {
      marginBottom: theme.spacing(1),
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  amazon: {
    color: theme.palette.getContrastText(
      theme.thirdParties.palette.myprotein.main
    ),
    backgroundColor: theme.thirdParties.palette.amazon.main,
    '&:hover': {
      backgroundColor: theme.thirdParties.palette.amazon.dark,
    },
  },
  myprotein: {
    color: '#fff',
    backgroundColor: theme.thirdParties.palette.myprotein.main,
    '&:hover': {
      backgroundColor: theme.thirdParties.palette.myprotein.dark,
    },
  },
  iherb: {
    color: '#fff',
    backgroundColor: theme.thirdParties.palette.iherb.main,
    '&:hover': {
      backgroundColor: theme.thirdParties.palette.iherb.dark,
    },
  },
}));

interface ProductDetailHeaderProps {
  brand_id: string;
  brand_name_ja: string;
  brand_name_en: string;
  name: string;
  product_master_id: string;
  variation_count: number;
  url_amazon?: string;
  url_iherb?: string;
  url_myprotein?: string;
}

const ProductDetailHeader: React.FC<ProductDetailHeaderProps> = ({
  brand_id,
  brand_name_ja,
  brand_name_en,
  name,
  product_master_id,
  variation_count,
  url_amazon,
  url_iherb,
  url_myprotein,
}) => {
  const classes = useStyles();
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
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <ProductTitle
            brand_id={brand_id}
            brand_name_ja={brand_name_ja}
            brand_name_en={brand_name_en}
            name={name}
            suffix="のレビュー"
          />
          <TextWithIcon
            text={`${variation_count}フレーバー`}
            icon={<ProteinIcon />}
          />
        </div>
        <Grid container spacing={1}>
          {url_myprotein && (
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="a"
                fullWidth
                href={url_myprotein}
                target="_blank"
                rel="nofollow noreferrer"
                className={classes.myprotein}
              >
                マイプロテインで見る
              </Button>
            </Grid>
          )}
          {url_iherb && (
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="a"
                fullWidth
                href={url_iherb}
                target="_blank"
                rel="nofollow noreferrer"
                className={classes.iherb}
              >
                iHerbで見る
              </Button>
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              component="a"
              fullWidth
              href={getAmazonUrl(brand_name_ja, name, url_amazon)}
              target="_blank"
              rel="nofollow noreferrer"
              className={classes.amazon}
            >
              Amazonで見る
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
