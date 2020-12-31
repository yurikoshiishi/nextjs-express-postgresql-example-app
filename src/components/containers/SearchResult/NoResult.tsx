import {Box, Card, CardContent, Typography} from '@material-ui/core';
import React from 'react';

interface NoResultProps {}

const NoResult: React.FC<NoResultProps> = ({}) => {
  return (
    <Card>
      <CardContent>
        <Box py={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            商品が見つかりませんでした。
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoResult;
