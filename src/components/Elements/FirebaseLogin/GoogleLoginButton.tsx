import {Button} from '@material-ui/core';
import React from 'react';
import GoogleIcon from '../../icons/GoogleIcon';
import firebaseClient from '../../../utils/firebaseClient';
import {useAuth} from '../../../contexts/auth';

interface GoogleLoginButtonProps {
  setError: (err) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({setError}) => {
  const {handleClose} = useAuth();

  const handleLogin = async () => {
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
      await firebaseClient.auth().signInWithPopup(provider);
      handleClose();
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
