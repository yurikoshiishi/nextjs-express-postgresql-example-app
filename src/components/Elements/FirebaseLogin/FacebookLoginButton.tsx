import {Button} from '@material-ui/core';
import React from 'react';
import FacebookIcon from '../../icons/FacebookIcon';
import firebaseClient from '../../../utils/firebaseClient';
import {useAuth} from '../../../contexts/auth';

interface FacebookLoginButtonProps {
  setError: (err) => void;
}

const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({
  setError,
}) => {
  const {handleClose} = useAuth();
  const handleLogin = async () => {
    try {
      const provider = new firebaseClient.auth.FacebookAuthProvider();
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
      startIcon={<FacebookIcon />}
      onClick={handleLogin}
    >
      Facebookでログイン
    </Button>
  );
};

export default FacebookLoginButton;
