import {Box, Typography} from '@material-ui/core';
import React from 'react';
import CardLink from '../CardLink';
import ImageContainer from '../ImageContainer';

interface BrandGridItemProps {
  brand_id: string;
  brand_name_ja: string;
  brand_name_en: string;
}

const BrandGridItem: React.FC<BrandGridItemProps> = ({
  brand_id,
  brand_name_en,
  brand_name_ja,
}) => {
  return (
    <CardLink href={`/brands/${brand_id}`}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box mb={2}>
          <ImageContainer
            src={`/images/brands/${brand_id}.png`}
            alt={brand_name_ja}
            desktopSize={150}
            mobileSize={150}
          />
        </Box>
        <Typography variant="body1" component="h3" align="center">
          {brand_name_ja}
        </Typography>
        <Typography variant="caption" color="textSecondary" align="center">
          {brand_name_en}
        </Typography>
      </Box>
    </CardLink>
  );
};

export default BrandGridItem;
