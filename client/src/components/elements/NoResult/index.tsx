import {Box, Card, CardContent, Typography} from '@material-ui/core';
import React from 'react';

interface NoResultProps {
  name: string;
  action?: React.ReactElement;
}

const NoResult: React.FC<NoResultProps> = ({name = 'アイテム', action}) => {
  return (
    <Card>
      <CardContent>
        <Box py={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            {name}が見つかりませんでした。
          </Typography>
          {action && (
            <Box mt={2} textAlign="center">
              {action}
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoResult;
