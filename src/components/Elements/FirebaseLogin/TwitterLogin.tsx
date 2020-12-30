import {Button} from '@material-ui/core';
import React from 'react';
import TwitterIcon from '../../icons/TwitterIcon';
import firebaseClient from '../../../utils/firebaseClient';
import {useAuth} from '../../../contexts/auth';

interface TwitterLoginButtonProps {
  setError: (err) => void;
}

const TwitterLoginButton: React.FC<TwitterLoginButtonProps> = ({setError}) => {
  const {handleClose} = useAuth();
  const handleLogin = async () => {
    try {
      const provider = new firebaseClient.auth.TwitterAuthProvider();
      await firebaseClient.auth().signInWithPopup(provider);
      handleClose();
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Button
      color="primary"
      variant="outlined"
      fullWidth
      startIcon={<TwitterIcon />}
      onClick={handleLogin}
    >
      Twitterでログイン
    </Button>
  );
};

export default TwitterLoginButton;
