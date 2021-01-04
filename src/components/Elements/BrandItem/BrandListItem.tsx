import {Box, Typography} from '@material-ui/core';
import React from 'react';
import CardLink from '../CardLink';
import ImageContainer from '../ImageContainer';

interface BrandListItemProps {
  brand_id: string;
  brand_name_ja: string;
  brand_name_en: string;
}

const BrandListItem: React.FC<BrandListItemProps> = ({
  brand_id,
  brand_name_en,
  brand_name_ja,
}) => {
  return (
    <CardLink href={`/brands/${brand_id}`}>
      <Box display="flex" alignItems="flex-start" flexDirection="row" p={1}>
        <Box mr={2}>
          <ImageContainer
            src={`/images/brands/${brand_id}.png`}
            alt={brand_name_ja}
            desktopSize={100}
            mobileSize={100}
          />
        </Box>
        <Box>
          <Typography variant="body1" component="h3">
            {brand_name_ja}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {brand_name_en}
          </Typography>
        </Box>
      </Box>
    </CardLink>
  );
};

export default BrandListItem;
