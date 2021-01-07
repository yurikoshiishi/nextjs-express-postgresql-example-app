import {Box, Button, Typography} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

interface NoReviewProps {
  product_master_id: string;
}

const NoReview: React.FC<NoReviewProps> = ({product_master_id}) => {
  return (
    <Box py={4} textAlign="center">
      <Box mb={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          レビューが投稿されていません
        </Typography>
      </Box>
      {product_master_id && (
        <Link href={`/reviews/${product_master_id}`} passHref>
          <Button variant="contained" color="primary">
            レビューを書く
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default NoReview;
