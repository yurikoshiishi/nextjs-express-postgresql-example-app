import React from 'react';
import TextLink from '../TextLink';
import {Typography} from '@material-ui/core';

interface BrandLinkProps {
  brand_id: string;
  brand_name_ja: string;
  brand_name_en?: string;
}

const BrandLink: React.FC<BrandLinkProps> = ({
  brand_id,
  brand_name_ja,
  brand_name_en,
}) => {
  return (
    <TextLink href={`/brands/${brand_id}`}>
      <Typography variant="body2" component="span" color="primary">
        {brand_name_ja}
        {brand_name_en && ` / ${brand_name_en}`}
      </Typography>
    </TextLink>
  );
};

export default BrandLink;
