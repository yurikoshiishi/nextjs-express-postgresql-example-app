import {Box, Container, Typography} from '@material-ui/core';
import React from 'react';
import FirebaseLogin from '../../elements/FirebaseLogin';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Container maxWidth="xs">
      <Box mb={3}>
        <Typography variant="h1" color="textPrimary" align="center">
          ログインはこちら
        </Typography>
      </Box>
      <FirebaseLogin />
    </Container>
  );
};

export default Login;
