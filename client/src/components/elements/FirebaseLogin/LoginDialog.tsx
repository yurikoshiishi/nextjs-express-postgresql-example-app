import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core';
import FirebaseLogin from '.';
import firebaseClient from '../../../utils/firebaseClient';
import {PROVIDER_TO_NAME} from '../../../constants';
import {FirebaseUser} from '../../../types';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
  },
}));

interface LoginDialogProps {
  open: boolean;
  user: FirebaseUser;
  handleClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({open, user, handleClose}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="login-modal"
      classes={{paper: classes.paper}}
    >
      <DialogTitle id="login-modal">ログインはこちら</DialogTitle>
      <DialogContent>
        {!user ? (
          <FirebaseLogin />
        ) : (
          <Typography variant="body2" color="textSecondary">
            既に
            {PROVIDER_TO_NAME[user.providerData[0]?.providerId] || user.email}
            でログイン済みです。
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
