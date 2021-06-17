import {Box, Typography, makeStyles, Button} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import CardLink from '../CardLink';
import ImageContainer from '../ImageContainer';

const useStyles = ({index}) =>
  makeStyles((theme) => ({
    root: {
      '& .CardLink': {
        borderTop:
          index === 0
            ? `1px solid ${theme.palette.divider}`
            : '1px solid transparent',
      },
    },
    jaName: {
      fontWeight: theme.typography.fontWeightBold,
    },
  }));

interface BrandListItemProps {
  brand_id: string;
  brand_name_ja: string;
  brand_name_en: string;
  index: number;
}

const BrandListItem: React.FC<BrandListItemProps> = ({
  brand_id,
  brand_name_en,
  brand_name_ja,
  index,
}) => {
  const classes = useStyles({index})();

  return (
    <Box component="li" className={classes.root}>
      <CardLink href={`/brands/${brand_id}`}>
        <Box display="flex" alignItems="stretch" flexDirection="row" p={1}>
          <Box mr={2}>
            <ImageContainer
              src={`/images/brands/${brand_id}.png`}
              alt={brand_name_ja}
              desktopSize={100}
              mobileSize={100}
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box>
              <Typography
                variant="body1"
                component="h3"
                className={classes.jaName}
              >
                {brand_name_ja}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {brand_name_en}
              </Typography>
            </Box>
            <Box mt="auto" ml={-1} mb={-1}>
              <Link href={`/brands/${brand_id}`} passHref>
                <Button variant="text" color="primary">
                  商品一覧を見る
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </CardLink>
    </Box>
  );
};

export default BrandListItem;
