import {Box, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import CardLink from '../CardLink';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    '& .CardLink': {
      height: '100%',
    },
  },
  jaName: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
          <Typography
            variant="body1"
            component="h3"
            align="center"
            className={classes.jaName}
          >
            {brand_name_ja}
          </Typography>
          <Typography variant="caption" color="textSecondary" align="center">
            {brand_name_en}
          </Typography>
        </Box>
      </CardLink>
    </div>
  );
};

export default BrandGridItem;
