import {Avatar, Typography, makeStyles, Button} from '@material-ui/core';
import React from 'react';
import {useAuth} from '../../../contexts/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 75,
    height: 75,
    marginBottom: theme.spacing(1),
  },
  name: {
    lineHeight: 1,
  },
}));

interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = ({}) => {
  const classes = useStyles();
  const {user, signIn} = useAuth();

  return (
    <div className={classes.root}>
      <Avatar src={user ? user.photoURL : ''} className={classes.avatar} />
      <Typography variant="h6" className={classes.name}>
        {user ? user.displayName : '匿名のユーザー'}
      </Typography>
      {user && (
        <Typography variant="body2" color="textSecondary">
          {user.email}
        </Typography>
      )}
    </div>
  );
};

export default UserInfo;
