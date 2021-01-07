import {Button, Typography, Box} from '@material-ui/core';
import React, {useState} from 'react';
import firebaseClient from '../../../utils/firebaseClient';

interface LinkAccountProps {
  error: firebaseClient.auth.AuthError;
  setError: (err) => void;
}

const getProviderForProviderId = (providerId) => {
  switch (providerId) {
    case 'google.com':
      return new firebaseClient.auth.GoogleAuthProvider();
    case 'facebook.com':
      return new firebaseClient.auth.FacebookAuthProvider();
    case 'twitter.com':
      return new firebaseClient.auth.TwitterAuthProvider();
    default:
      return null;
  }
};

const LinkAccount: React.FC<LinkAccountProps> = ({error, setError}) => {
  const [isLinkError, setLinkError] = useState<boolean>(false);

  const handleLinkAccount = async () => {
    setLinkError(false);
    try {
      const pendingCred = error.credential;
      const email = error.email;
      const methods = await firebaseClient
        .auth()
        .fetchSignInMethodsForEmail(email);

      console.log({error, methods});

      // NOTE: get provider for current auth method
      const provider = getProviderForProviderId(methods[0]);

      const result = await firebaseClient.auth().signInWithPopup(provider);

      await result.user.linkWithCredential(pendingCred);

      setError(null);
    } catch (err) {
      setLinkError(true);
    }
  };

  return (
    <Box mb={2}>
      <Box mb={1}>
        <Typography variant="body2" color="primary">
          過去に同じメールアドレスで異なるプロバイダーからログインしています。アカウントをリンクしますか？
        </Typography>
      </Box>
      <Box mb={1} width="100%">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLinkAccount}
        >
          アカウントをリンクする
        </Button>
      </Box>
      {isLinkError && (
        <Typography variant="body2" color="error">
          リンク中にエラーが発生しました。再度お試しください。
        </Typography>
      )}
    </Box>
  );
};

export default LinkAccount;
