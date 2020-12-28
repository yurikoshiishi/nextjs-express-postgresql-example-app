import {Box, Button, Card, CardContent, Typography} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useAuth} from '../../../../contexts/auth';

interface UserIdFieldProps {
  name: string;
  setFieldValue: (string, any) => void;
}

const UserIdField: React.FC<UserIdFieldProps> = ({name, setFieldValue}) => {
  const {user, signIn} = useAuth();

  useEffect(() => {
    if (user) {
      setFieldValue(name, user.uid);
    }
  }, [user]);

  if (user) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Box textAlign="center" pt={1}>
          <Box mb={2}>
            <Typography variant="body2" color="textPrimary">
              レビューの投稿にはログインが必要です。
            </Typography>
            <Typography variant="caption" color="textSecondary">
              ※入力した情報は失われません。
            </Typography>
          </Box>
          <Button onClick={signIn} color="primary" variant="outlined" fullWidth>
            ログイン
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserIdField;
