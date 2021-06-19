import {Button} from '@material-ui/core';
import React from 'react';
import firebaseClient from '../../../utils/firebaseClient';

interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = ({}) => {
  const handleLogout = async () => {
    try {
      await firebaseClient.auth().signOut();
    } catch (err) {}
  };

  return (
    <Button variant="text" color="primary" onClick={handleLogout}>
      ログアウト
    </Button>
  );
};

export default LogoutButton;
