import {Box, Card, CardContent, Typography} from '@material-ui/core';
import React from 'react';
import FirebaseLogin from '../elements/FirebaseLogin';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Box maxWidth={450} mx="auto">
      <Card>
        <CardContent>
          <Box mt={2} mb={3}>
            <Typography
              variant="h3"
              variantMapping={{h3: 'h1'}}
              color="textPrimary"
              align="center"
            >
              ログインはこちら
            </Typography>
          </Box>
          <Box mb={3}>
            <FirebaseLogin />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
