import {Typography, Box, Hidden} from '@material-ui/core';
import React from 'react';
import Slider from 'react-slick';
import {ProductMaster} from '../../../types';
import ProductGridItem from '../ProductGridItem';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import CardLink from '../CardLink';
import ProductHorizontalScroller from '../ProductHorizontalScroller';

interface ProductSliderProps {
  products: ProductMaster[];
  title?: string;
}

const SLICK_CONFIG = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <ArrowForwardIosOutlinedIcon color="action" />,
  prevArrow: <ArrowBackIosOutlinedIcon color="action" />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
  ],
};

const ProductSlider: React.FC<ProductSliderProps> = ({products, title}) => {
  if (!products) {
    return null;
  }
  return (
    <Box my={5} px={{xs: 1, md: 3}} className="ProductSlider">
      {title && (
        <Box mb={1}>
          <Typography variant="h3">{title}</Typography>
        </Box>
      )}
      <Hidden smDown>
        <Slider {...SLICK_CONFIG}>
          {products.map((p) => (
            <Box p={1} key={p.product_master_id}>
              <CardLink href={`/products/${p.product_master_id}`}>
                <ProductGridItem
                  product={p}
                  imageSize={{desktop: 150, mobile: 100}}
                />
              </CardLink>
            </Box>
          ))}
        </Slider>
      </Hidden>
      <Hidden mdUp>
        <ProductHorizontalScroller products={products} />
      </Hidden>
    </Box>
  );
};

export default ProductSlider;
