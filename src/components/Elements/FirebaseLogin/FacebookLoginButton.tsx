import {Button} from '@material-ui/core';
import React from 'react';
import FacebookIcon from '../../icons/FacebookIcon';
import firebaseClient from '../../../utils/firebaseClient';

interface FacebookLoginButtonProps {
  setError: (err) => void;
}

const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({
  setError,
}) => {
  const handleLogin = async () => {
    try {
      const provider = new firebaseClient.auth.FacebookAuthProvider();
      const result = await firebaseClient.auth().signInWithPopup(provider);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Button
      color="default"
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
