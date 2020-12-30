import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import LinkAccount from './LinkAccount';
import firebaseClient from '../../../utils/firebaseClient';
import TwitterLoginButton from './TwitterLogin';

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    '& .MuiButton-root': {
      textTransform: 'none',
      marginBottom: theme.spacing(2),
      '&:last-child': {
        marginBottom: 0,
      },
      '& svg': {
        width: 20,
        height: 20,
      },
    },
  },
}));

interface FirebaseLoginProps {}

const ACCOUNT_EXISTS = 'auth/account-exists-with-different-credential';

const FirebaseLogin: React.FC<FirebaseLoginProps> = ({}) => {
  const classes = useStyles();
  const [error, setError] = useState<firebaseClient.auth.Error>(null);

  return (
    <div>
      {error?.code === ACCOUNT_EXISTS && (
        <LinkAccount error={error} setError={setError} />
      )}
      <div className={classes.buttonGroup}>
        <GoogleLoginButton setError={setError} />
        <TwitterLoginButton setError={setError} />
        <FacebookLoginButton setError={setError} />
      </div>
    </div>
  );
};

export default FirebaseLogin;
