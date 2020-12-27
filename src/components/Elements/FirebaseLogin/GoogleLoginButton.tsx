import {Button} from '@material-ui/core';
import React from 'react';
import GoogleIcon from '../../icons/GoogleIcon';
import firebaseClient from '../../../utils/firebaseClient';

interface GoogleLoginButtonProps {
  setError: (err) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({setError}) => {
  const handleLogin = async () => {
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
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
      startIcon={<GoogleIcon />}
      onClick={handleLogin}
    >
      Googleでログイン
    </Button>
  );
};

export default GoogleLoginButton;
