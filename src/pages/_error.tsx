import {Box, Button, Container, Typography} from '@material-ui/core';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {ApiError} from '../utils/api';

interface ErrorProps {
  error?: ApiError['error'];
}

const Error: React.FC<ErrorProps> = ({error}) => {
  const router = useRouter();

  return (
    <Container maxWidth="xs">
      <Box textAlign="center">
        <Typography variant="h1">エラーが発生しました</Typography>
        <Typography variant="body2" color="textSecondary">
          エラーコード: {error.status}
        </Typography>
        <Box mt={3}>
          <Box mb={2}>
            <Link href="/" passHref>
              <Button variant="contained" color="primary" fullWidth>
                トップに戻る
              </Button>
            </Link>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={router.back}
              fullWidth
            >
              前のページに戻る
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Error;
